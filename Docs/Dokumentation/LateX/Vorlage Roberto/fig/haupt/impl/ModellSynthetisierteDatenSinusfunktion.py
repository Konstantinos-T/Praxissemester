# Bibliotheken einbinden
from numpy import asarray, arange, linspace, ones_like, histogram, diff, insert, cumsum, trapz
from math import pi, sin
from random import gauss, choice
import matplotlib.pyplot as plt
from scipy.interpolate import make_interp_spline

# Berechnung des Integralwerts unter einer 2D-Kurve
def integrateT(x, y):
    area = trapz(y=y, x=x)
    return area   

# Histogramm-Spline-Approximation
def histogramToSplinePDF(data,k=5,bc_type='not-a-knot'):
    weights = ones_like(data)/float(len(data))
    heights, bin_borders = histogram(data,bins=7,normed=True,weights=weights)
    centers = bin_borders[:-1] + diff(bin_borders) / 2
    bin_width = centers[1]-centers[0]
    t = linspace( centers[0]-bin_width/2, centers[-1]+bin_width/2, len(centers)+1 )
    dt = diff(t)
    cumsumTemp = heights * dt
    cumsumTemp = insert(cumsumTemp,0,0)
    Fvals = cumsum(cumsumTemp)
    spl = make_interp_spline(t, Fvals, k=k, bc_type=bc_type)
    splD = spl.derivative()
    t2 = linspace(centers[0]-bin_width/2,centers[-1]+bin_width/2,len(data))
    y2 = splD(t2)
    print('Integral-Wert: ' + str(integrateT(t2,y2)))
    return t2,y2     

# Hilfsfunktion - Datensaetze in CSV-Dateien schreiben
def dataWriterHelperCSV(f,key,value,N):
    k = 0
    f.write(key + ',')    
    for i in value:
        f.write(str(i))
        if N == 1:
            f.write("")
        if k < N-1:
            f.write(",")    
        k = k + 1
    f.write("\n")

# Datensaetze in CSV-Dateien schreiben
def writeDataIntoCSV(filename,x,y):
    N = len(x)
    with open(filename,'w') as f:
        dataWriterHelperCSV(f,'x',x,N)
        dataWriterHelperCSV(f,'y',y,N)

# Funktion zur Bestimmung der Sinusfunktion als Baseline
def callBaselineSinusFunction(alpha1,alpha2,alpha3,alpha4):
    a = 1+alpha1
    b = 1+alpha2
    c = 0+alpha3
    d = 0+alpha4
    tMin = -1*pi
    tMax = 1*pi
    tN = 1000
    t = linspace(tMin,tMax,tN)
    y = []
    for _, val in enumerate(t):
        y.append( a*sin(b*(val+c))+d )
    t = asarray(t)
    y = asarray(y)
    return t, y

# Ansatz der Datensaetze bzw. Samples
N = 100

# Variationswerte (initial)
alpha1_init = 0
alpha2_init = 0
alpha3_init = 0
alpha4_init = 0

# Vektor fuer die Variationswerte (zu Beginn gleich der Initialwerte)
alpha1V = [alpha1_init]
alpha2V = [alpha2_init]
alpha3V = [alpha3_init]
alpha4V = [alpha4_init]

# Wertebereiche der Variationswerte
alpha1 = arange(start=-0.01, stop=0.01, step=0.001)
alpha2 = arange(start=-0.01, stop=0.01, step=0.001)
alpha3 = arange(start=-0.01, stop=0.01, step=0.001)
alpha4 = arange(start=-0.01, stop=0.01, step=0.001)

# Vektoren anlegen (der zu generierenden Datensaetze) 
ttt = []
yyy = []
Y_Probs = []
ProbsY = []

# Basisdatensatz
tt0, yy0 = callBaselineSinusFunction( alpha1_init,alpha2_init,alpha3_init,alpha4_init )

# Werte der Dichtefunktionen + Reshaping (Basisdatensatz)
tt0 = tt0.reshape(-1,1)
yy0 = yy0.reshape(-1,1)

# Histogramm-Spline-Approximation (Basisdatensatz)
y_probs0,probs0Y = histogramToSplinePDF(yy0)

# Basisdatensatz dem spaeter finalen Datensatz hinzufuegen
ttt.append(tt0)
yyy.append(yy0)
Y_Probs.append(y_probs0)
ProbsY.append(probs0Y)

# Normierung der relativen Wahrscheinlichkeitsdichtewerte (Basisdatensatz)
normProbs0Y = probs0Y/sum(probs0Y)

# Basisdatensatz in CSV-Datei schreiben
fileNameBase = 'dataSynthesizedSinusfunktion'
writeDataIntoCSV(fileNameBase + '0.csv',y_probs0,normProbs0Y)

# Iteriere ueber die Anzahl an Samples     
for i in range(1,N):
    
    # Variationswerte zufaellig aus Vektoren herausziehen
    alpha1V.append(choice(alpha1))
    alpha2V.append(choice(alpha2))
    alpha3V.append(choice(alpha3))
    alpha4V.append(choice(alpha4))
            
    # Zusaetzlicher Datensatz (pro Iteration)
    tt, yy = callBaselineSinusFunction( alpha1V[i],alpha2V[i],alpha3V[i],alpha4V[i] )

    # Werte der Dichtefunktionen + Reshaping (Zusaetzlicher Datensatz)
    tt = tt.reshape(-1,1)
    yy = yy.reshape(-1,1)

    # Histogramm-Spline-Approximation (Zusaetzlicher Datensatz)
    y_probs,probsY = histogramToSplinePDF(yy)

    # Datensatz dem spaeter finalen Datensatz hinzufuegen
    ttt.append(tt)
    yyy.append(yy)
    Y_Probs.append(y_probs)
    ProbsY.append(probsY)

    # Normierung der relativen Wahrscheinlichkeitsdichtewerte (Zusaetzlicher Datensatz)
    normProbsY = probsY/sum(probsY)

    # Zusaetzlicher Datensatz in CSV-Datei schreiben
    writeDataIntoCSV(fileNameBase + str(i) + '.csv',y_probs,normProbsY)

# Plot -> Fahrkritisches Szenario: Ueberholvorgang mit Gegenverkehr
fontsizeBaseline = 14
plt.figure(figsize=(12,8))
for i in range(len(ttt)):
    plt.plot(ttt[i], yyy[i])
plt.title('Baseline: Sinusfunktion', fontsize=fontsizeBaseline+2)
plt.xlabel("Zeit t [s]", fontsize=fontsizeBaseline)
plt.ylabel("Auslenkung y [m]", fontsize=fontsizeBaseline)  
plt.grid() 
plt.show()

# Plot -> Wahrscheinlichkeitsdichtefunktionen
plt.figure(figsize=(5,5))
for i in range(len(ttt)):
    plt.plot(Y_Probs[i],ProbsY[i])
plt.title('Wahrscheinlichkeitsdichteschaetzer: Histogramm-Spline-Approximation', fontsize=fontsizeBaseline+2)
plt.grid()
plt.xlabel("Auslenkung y [m]", fontsize=fontsizeBaseline)
plt.ylabel("Relative Wahrscheinlichkeit P(y) [1]", fontsize=fontsizeBaseline)
plt.show()