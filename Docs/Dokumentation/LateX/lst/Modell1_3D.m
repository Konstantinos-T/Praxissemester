clear
% Beute / Hasen
a1 = 0.1; % Geburtenrate: Verdopplung der Population in 20 Wochen
b1 = 0.02; % Sterberate: 2% der Hasen sterben an natürlichen Ursachen
c1 = 0.0006; % Fressrate

% Räuber / Füchse
a2 = 0.0002; % Geburtenrate
b2 = 0.1; % Sterberate: Füchse verlieren pro Woche 10% Biomasse

x1 = linspace(1,1000,100);           % x-scaling
x2 = linspace(1,1000,100);           % y-scaling

[X1,X2] = meshgrid(x1,x2);
% V = (exp(X1)./X1).*(exp(X2)./X2);
% V = (exp(a2.*X1)./(X1.^b2)).*(exp(c1.*X2)./(X2.^(a1 - b1)));
V = -(a1 - b1)*log(X2) - b2*log(X1) + c1.*X2 + a2.*X1;
surf(X1,X2,V)

