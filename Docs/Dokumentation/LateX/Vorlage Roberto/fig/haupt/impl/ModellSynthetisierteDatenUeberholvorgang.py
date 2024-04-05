# Bibliotheken einbinden
from numpy import asarray, arange, ones, concatenate, zeros, linspace, ones_like, histogram, diff, insert, cumsum, trapz
from math import pi, sqrt, sin
from random import gauss, choice
import matplotlib.pyplot as plt
from scipy.interpolate import make_interp_spline

# Berechnung des Integralwerts unter einer 2D-Kurve
def integrateT(x, y):
    area = trapz(y=y, x=x)
    return area   

# Histogramm-Spline-Approximation
def histogramToSplinePDF(data,k=11,bc_type='not-a-knot'):
    weights = ones_like(data)/float(len(data))
    heights, bin_borders = histogram(data,bins=13,normed=True,weights=weights)
    centers = bin_borders[:-1] + diff(bin_borders) / 2
    bin_width = centers[1]-centers[0]
    t = linspace( centers[0]-bin_width/2, centers[-1]+bin_width/2,len(centers)+1 )
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

# Berechnung der Laenge einer 2D-Kurve
def arcLengthCurve(x,y):
    s = zeros(len(x)-1)
    s[0] = sqrt((x[1] - x[0])**2 + (y[1] - y[0])**2)
    for i in range(1,len(x)-1):
        s[i] = s[i-1] + sqrt((x[i+1] - x[i])**2 + (y[i+1] - y[i])**2)     
    return s[-1]

# Funktion zur Abbildung eines ueberholvorgangs mit Gegenverkehr
def ueberholvorgangFkt(alpha1,alpha2):
    
    # Variationsparameter des Sicherheitsabstandes des Gegenverkehrs
    alpha3 = 0

    # Schrittweite in Laengsrichtung
    xIter=0.05

    # Geschwindigkeit des Ueberholten [m/s]
    v1=50/3.6

    # Geschwindigkeit des Ueberholenden [m/s]
    v2=100/3.6

    # Geschwindigkeit Gegenverkehr [m/s]
    v3=30/3.6

    # Spurbreite [m]
    sv=3

    # Querbeschleunigung [m/s^2]
    aq=5

    # Empirischer Faktor
    K=2.67

    # Sicherheitsabstand vor Ueberholvorgang
    aVor=15

    # Sicherheitsabstand nach Ueberholvorgang
    aNach=17

    # Fahrzeuglaenge Ueberholender
    L1=4

    # Fahrzeuglaenge Ueberholter
    L2=4
    sSafe=0+alpha3

    # Geschwindigkeitsunterschied
    dv=v2-v1

    # Einscherzeit = Ausscherzeit
    tE=K*sqrt(sv/aq)

    # Einscherweg = Ausschwerweg
    sEinscher=tE*dv
    sAusscher=sEinscher

    # Ueberholweg
    sa=aVor+L1+aNach+L2

    # Ueberholzeit
    tUeb=sa/dv

    # Eigentliche Ueberholstrecke
    sUeb=v2*tUeb

    # Zuruecklegende Strecke Gegenverkehr
    sGegen=v3*tUeb

    # Safety Margin Safety-Critical
    SWerf=sUeb+sGegen+sSafe

    # Ueberholstrecke Gegenfahrbahn
    sP=sUeb-sAusscher-sEinscher

    # Vektor Ausschwerweg Laengsrichtung
    xA = arange(start=0, stop=sAusscher, step=xIter)
    
    # Vektor Ausschwerweg Querrichtung
    y1 = []
    for _, val in enumerate(xA):
        y1.append( val*(sv/sAusscher) - (1+alpha1)*(sv/(2*pi))*sin((val*2*pi)/sAusscher) )
    y1 = asarray(y1)       
    
    # Vektor Gegenfahrbahn Laengsrichtung
    x2 = arange(start=xA[-1]+xIter, stop=sP+xA[-1]+xIter, step=xIter)

    # Vektor Gegenfahrbahn Querrichtung
    y2 = y1[-1]*ones(len(x2))

    # Vektor Einschwerweg Laengsrichtung
    x3 = arange(start=x2[-1]+xIter, stop=x2[-1]+xIter+sEinscher, step=xIter)
    
    # Vektor Einschwerweg Querrichtung
    xE = arange(start=0, stop=sEinscher, step=xIter)
    y3 = []
    for _, val in enumerate(xE):
        y3.append( -((sv/sEinscher)*val - (1+alpha2)*(sv/(2*pi))*sin((2*pi*val)/sEinscher)) + sv )
    y3 = asarray(y3)

    # Einschwerweg + Gegenfahrbahn + Ausschwerweg (Laengsrichtung & Querrichtung)
    xUeb = concatenate([xA,x2,x3])
    yUeb = concatenate([y1,y2,y3])

    # Gesamtweg Ueberholvorgang
    s2Ges = arcLengthCurve(xUeb,yUeb)

    # Gesamtzeit Ueberholvorgang
    t2Ges = s2Ges/v2
    t = linspace(0,t2Ges,len(xUeb))

    # Gesamtweg Ueberholte (Laengsrichtung & Querrichtung)
    xHE = v1*tUeb+aVor
    xH = linspace(aVor,xHE,len(xUeb))
    yH = zeros(len(xUeb))

    # Gesamtweg Gegenverkehr (Laengsrichtung & Querrichtung)
    xG = linspace(SWerf,SWerf-sGegen,len(xUeb))
    yG = sv*ones(len(xG))

    return xUeb,yUeb

# Ansatz der Datensaetze bzw. Samples
N = 100

# Variationswerte (initial)
alpha1_init = 0
alpha2_init = 0

# Vektor fuer die Variationswerte (zu Beginn gleich der Initialwerte)
alpha1V = [alpha1_init]
alpha2V = [alpha2_init]

# Wertebereiche der Variationswerte
alpha1 = arange(start=-0.1, stop=0.1, step=0.01)
alpha2 = arange(start=-0.1, stop=0.1, step=0.01)

# Vektoren anlegen (der zu generierenden Datensaetze) 
ttt = []
yyy = []
Y_Probs = []
ProbsY = []

# Basisdatensatz
tt0, yy0 = ueberholvorgangFkt(alpha1_init,alpha2_init)

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
fileNameBase = 'dataSynthesizedUeberholvorgang'
writeDataIntoCSV(fileNameBase + '0.csv',y_probs0,normProbs0Y)

# Iteriere ueber die Anzahl an Samples     
for i in range(1,N):
    
    # Variationswerte zufaellig aus Vektoren herausziehen
    alpha1V.append(choice(alpha1))
    alpha2V.append(choice(alpha2))
            
    # Zusaetzlicher Datensatz (pro Iteration)
    tt, yy = ueberholvorgangFkt(alpha1V[i],alpha2V[i])

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
plt.title('Fahrkritisches Szenario: Ueberholvorgang mit Gegenverkehr', fontsize=fontsizeBaseline+2)
plt.xlabel("Laengsrichtung x [m]", fontsize=fontsizeBaseline)
plt.ylabel("Querrichtung y [m]", fontsize=fontsizeBaseline)  
plt.grid() 
plt.show()

# Plot -> Wahrscheinlichkeitsdichtefunktionen
plt.figure(figsize=(5,5))
for i in range(len(ttt)):
    plt.plot(Y_Probs[i],ProbsY[i])
plt.title('Wahrscheinlichkeitsdichteschaetzer: Histogramm-Spline-Approximation', fontsize=fontsizeBaseline+2)
plt.grid()
plt.xlabel("Querrichtung y [m]", fontsize=fontsizeBaseline)
plt.ylabel("Relative Wahrscheinlichkeit P(y) [1]", fontsize=fontsizeBaseline)
plt.show()