clear
%% Randbedingungen / Parameter [pro Woche]

% Beute / Hasen
a1 = 0.05; % Geburtenrate: Verdopplung der Population in 20 Wochen
b1 = 0.02; % Sterberate: 2% der Hasen sterben an natürlichen Ursachen
c1 = 0.0006; % Fressrate der Füchse

% Räuber / Füchse
a2 = 0.0002; % Geburtenrate/Beutewahrscheinlichkeit der Füchse
b2 = 0.1; % Sterberate: Füchse verlieren pro Woche 10% Biomasse

% Anfangsbedingungen
W = 1400; % Maximalzahl der Hasen
dt = 1/7; % Zeitschritt
tmax = 51*10; % Dauer in Wochen
t = 0:dt:tmax; % Zeitvektor

% Eigene Axis für Phasenkurven
ax = gca;

%% Berechnung

for x20 = [25 10]
    
    for x10 = [2500 1400 650]
        
        % mit Anfangswerten initialisieren
        x1(1) = x10;
        x2(1) = x20;
        
        for i = 2:length(t)
            
            % Änderung der Beutepopulation mit logistischem Wachstum
            dx1 = 1/W*(W-x1(i - 1))*(a1 - b1)*x1(i - 1) - c1*x2(i - 1)*x1(i - 1);
            x1(i) = x1(i - 1) + dt*dx1;
            
            % Änderung der Räuberpopulation
            dx2 = (a2*x2(i - 1)*x1(i - 1) - b2*x2(i - 1));
            x2(i) = x2(i - 1) + dt*dx2;
            
        end
        
        figure
        plot(t,x1,t,x2)
        xlabel('Zeit in Wochen','Fontweight','bold')
        ylabel('Population in Stk.','Fontweight','bold')
        legend('Anzahl Beute','Anzahl Räuber')
        set(gca,'Fontweight','bold')
        
        hold(ax,'on')
        plot(ax,x1,x2)
        hold(ax,'off')
        
    end
    
end

xlabel(ax,'Anzahl Hasen in Stk.','Fontweight','bold')
ylabel(ax,'Anzahl Füchse in Stk.','Fontweight','bold')
title(ax,'Phasenkurve x_2 = f(x_1)')
set(ax,'Fontweight','bold')

figure
hold on
% Zustandsdifferentialgleichungen in anonymer Funktion speichern
f = @(t,x) [x(1)*((a1 - b1)*(1/W*(W - x(1))) - c1*x(2)); x(2)*(a2*x(1) - b2)];

%Phasenkurven für verschiedene Anfangsbedingungen bestimmen
for x20 = [25 10]
    
    for x10 = [2500 1400 650]
        
        % Verlauf mit ode45 solver berechnen
        [~, xs] = ode45(f,t, [x10, x20]);
        % Phasenkurve plotten
        plot(xs(:,1), xs(:,2))
        
    end
    
end

xlabel('Anzahl Hasen in Stk.','Fontweight','bold')
ylabel('Anzahl Füchse in Stk.','Fontweight','bold')
title('Phasenkurve x_2 = f(x_1)')
set(gca,'Fontweight','bold')
hold off
