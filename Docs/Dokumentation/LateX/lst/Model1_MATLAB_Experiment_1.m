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
dt = 1/7; % Zeitschritt
tmax = 51*10; % Dauer in Wochen
t = 0:dt:tmax;
x10 = 550;
x20 = 25;

ax = gca;
hold(ax,'on')

% Gleichgewichtslage
x1G = b2/a2;
x2G = (a1 - b1) / c1;

% Berechnung
for y0 = 0.5:0.5:2
% for x20 = [25 10]
    
%     for x10 = [1400 650]
        
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
            
        end
        
        plot(ax,x1,x2)
        
%     end
    
end

ax = gca;
ax.XTickLabels = [];
ax.YTickLabels = [];
% plot(x1G,x2G,'.','MarkerSize',20,'Color','k')
% text((x1G+0.05*x1G),(x2G+0.05*x2G),[strcat("x: ",num2str(x1G));strcat("y: ",num2str(x2G))]);
% str1={['$x1 = ',num2str(x1G) '$'], ['$ x2 = ',num2str(x2G) '$']};
% text((x1G+0.05*x1G),(x2G+0.05*x2G),str1,'interpreter','latex');
% text((x1G + 0.05*x1G),(x2G + 0.1*x2G),'G');
% line([x1G x1G],[0 x2G],'LineStyle','--','Color','k');
% line([0 x1G],[x2G x2G],'LineStyle','--','Color','k');
% line([x1G x1G],[0 ax.YLim(2)],'LineStyle','--','Color','k');
% line([0 ax.XLim(2)],[x2G x2G],'LineStyle','--','Color','k');
ax.XTick = x1G;
ax.YTick = x2G;
% ax.TickLabelInterpreter = 'latex';
% text((0.01*ax.XLim(2)),(x2G/4),'I','FontSize',14,'FontName','Times');
% text((0.9*ax.XLim(2)),(x2G/4),'II','FontSize',14,'FontName','Times');
% text((0.9*ax.XLim(2)),(0.9*ax.YLim(2)),'III','FontSize',14,'FontName','Times');
% text((0.01*ax.XLim(2)),(0.9*ax.YLim(2)),'IV','FontSize',14,'FontName','Times');
% ax.XTickLabel = '$\frac{a_2}{b_2}$';
% ax.YTickLabel = '$\frac{a_1 - b_1}{c_1}$';
xt = get(ax,'XTickLabel');
set(ax,'XTickLabel',xt,'FontSize',16,'FontWeight','bold')
yt = get(gca,'YTickLabel');
set(gca,'YTickLabel',yt,'FontSize',16,'FontWeight','bold')

xlabel(ax,'Anzahl an Beutetieren in Stk.','FontSize',11)
ylabel(ax,'Anzahl an Räubern in Stk.','FontSize',11)
title(ax,'Phasenkurve x_2 = f(x_1)','FontSize',11)

hold(ax,'off')

syms x y
eqnx1 = a1 - b1 - c1*y == 0;
eqnx2 = a2*x - b2 == 0;
Sy = vpasolve(eqnx1, y);
Sx = vpasolve(eqnx2, x);

f = @(x) [(a1 - b1 - c1*x(2));(a2*x(1) - b2)];
x = fsolve(f,[10,10])