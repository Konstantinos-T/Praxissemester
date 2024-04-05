%% Randbedingungen

% Parameter

% Beute / Hasen
a1 = 0.1; % Geburtenrate
b1 = 0.02; % Sterberate
c1 = 0.002; % Fressrate

% Räuber / Füchse
a2 = 0.0004; % Geburtenrate
b2 = 0.2; % Sterberate

% konstante Schädlingsbekämpfung
v = 0.02; % chemische Todesrate
k = 0.5; % konstanter Faktor

% Gleichgewichtslage
x1g = b2/a2;
x2g = (a1 - b1) / c1;

% Anfangsbedingungen
dt = 1/10; % Zeitschritt
tmax = 100; % dauer
t = 0:dt:tmax;
x1 = zeros(length(t),1);
x2 = zeros(length(t),1);

%% Berechnung

fig = figure;
ax = gca;

for x20 = [25 10]
    
    for x10 = [2500 1400 650]
        
        for i = 1:length(t)
            
            % mit Anfangswerten initialisieren
            if (i == 1)
                
                x1(i) = x10;
                x2(i) = x20;
                
                continue;
                
            end
            
            % Änderung der Beutepopulation
            dx1 = a1*x1(i - 1) - b1*x1(i - 1) - v*x1(i - 1) - c1*x2(i - 1)*x1(i - 1);
            x1(i) = x1(i - 1) + dx1;
            
            % Änderung der Räuberpopulation
            dx2 = a2*x2(i - 1)*x1(i) - b2*x2(i - 1) - k*v*x2(i - 1);
            x2(i) = x2(i - 1) + dx2;
            
        end
        
        figure
        plot(t,x1,t,x2)
        xlabel('Zeit in Tagen')
        ylabel('Population in Stk.')
        title('Lotka-Volterra-Modell mit einmaligem Eingriff')
        
        hold(ax,'on')
        plot(ax,x1,x2)
        xlabel('x1')
        ylabel('x2')
        hold(ax,'off')
        
    end
    
end

