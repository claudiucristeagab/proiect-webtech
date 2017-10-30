Proiectul 28: Jurnal multiuser integrat cu Google Translate.
Postarile vor fi incarcate dintr-o baza de date.

Structura bazei de date:

1) Journal
-ID: numeric automat (primary key)
-Title: text (titlul postarii)
-Post: text (aici va fi stocat continutul postarii din jurnal)
-User: ID (va fi specificat utilizatorul ce a facut postarea) (foreign key -> Users: ID)
-Date: date (data postarii)

2) Users
-ID: numeric automat (primary key)
-Username: text (nume utilizator)
-Password: text (parola utilizator)

Macheta pentru interfata grafica: UI.png

Componente:
- Form pentru postari
- Buton pentru login
- Searchbar cu filtru
- Buton pentru adaugare postare (utilizator logat + form-ul nou va aparea in mijlocul ecranului cu un fundal mai inchis la culoare)
