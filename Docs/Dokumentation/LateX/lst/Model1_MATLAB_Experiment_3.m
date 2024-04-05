clear
%% Randbedingungen / Parameter [pro Woche]

% Beute / Hasen
a1 = 0.05; % Geburtenrate: Verdopplung der Population in 20 Wochen
b1 = 0.02; % Sterberate: 2% der Hasen sterben an natürlichen Ursachen
c1 = 0.0006; % Fressrate der Füchse

% Räuber / Füchse
a2 = 0.0002; % Geburtenrate/Beutewahrscheinlichkeit der Füchse
b2 = 0.1; % Sterberate: Füchse verlieren pro Woche 10% Biomasse

% Gleichgewichtslage
x1g = b2/a2;
x2g = (a1 - b1) / c1;

% Anfangsbedingungen
dt = 1/7; % Zeitschritt
tmax = 51*10; % dauer
t = 0:dt:tmax;

rndTime = randi([0 round(length(t)/2)],1,1);
% rndTime = 0;

%% Berechnung

x10 = 550;
x20 = 25;

% for x20 = [25 10]
%
%     for x10 = [1400 650]

for y0 = 0.5:0.5:2
    
    % mit Anfangswerten initialisieren
    x1(1) = x10*y0;
    x2(1) = x20*y0;
    
    for i = 2:length(t)
        
        
        % Änderung der Beutepopulation
        dx1 = a1*x1(i - 1) - b1*x1(i - 1) - c1*x2(i - 1)*x1(i - 1);
        x1(i) = x1(i - 1) + dt*dx1;
        
        % Änderung der Räuberpopulation
        dx2 = a2*x2(i - 1)*x1(i) - b2*x2(i - 1);
        x2(i) = x2(i - 1) + dt*dx2;
        
        if i == rndTime
            
            if x2(i) ~= 0
                
                x2(i) = x2(i) / 2;
                
            else
                
                rndTime = randi([i round(length(t)/2)],1,1);
                
            end
            
        end
        
%         if x2(i) > 2*x2g && ~rndTime %abs(x2(i) - 2*x2g) < 1/10
%             
%             
%             x2(i) = x2(i)/2;
%             rndTime = i
%             
%         end
        
    end
    
    figure
    plot(t,x1,t,x2)
    xlabel('Zeit in Wochen','Fontweight','bold')
    ylabel('Population in Stk.','Fontweight','bold')
    legend('Anzahl Beute','Anzahl Räuber')
    
    figure
    plot(x1,x2,'Color','b')
    hold on
    plot(x1(rndTime:end),x2(rndTime:end),'Color','g')
    xlabel('Anzahl Hasen in Stk.','Fontweight','bold')
    ylabel('Anzahl Füchse in Stk.','Fontweight','bold')
    title('Phasenkurve x_2 = f(x_1)','Fontweight','bold')
    legend('Phasenkurve vor Eingriff','Phasenkurve nach Eingriff')
    set(gca,'Fontweight','bold')
    hold off
    
    %         rndTime = 0;
    
    %     end
    
end

% figure
% f = @(t,x) [x(1)*(a1 - b1 - c1*x(2)); x(2)*(a2*x(1) - b2)];
% hold on
% %calculate the phase trajectories for different initial conditions
% for y0=1/2:0.25:2
%     [ts, ys] = ode45(f,[t(1), t(end)], [y0*x10, y0*x20]);
%     % plot of closed loop phase trajectories
%     plot(ys(:,1), ys(:,2))
% end
% hold off
% xlabel('Hasen')
% ylabel('Füchse')