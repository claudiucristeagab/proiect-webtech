Proiectul 28: Jurnal multiuser integrat cu Google Translate.
Postarile vor fi incarcate dintr-o baza de date.

API-ul extern Google TL va traduce postarile:
Apasand un label de sub fiecare postare, textul va fi tradus din limba specificata in alta.

Tehnologii incluse:
- Node.js (express)
- React.js
- RESTful
- Google Translate

Structura bazei de date:

1) Journal
-ID: numeric automat (primary key)
-Title: text (titlul postarii)
-Post: text (aici va fi stocat continutul postarii din jurnal)
-User: ID (va fi specificat utilizatorul ce a facut postarea) (foreign key -> Users: ID)
-CreatedAt: date (data postarii)

2) Users
-ID: numeric automat (primary key)
-Username: text (nume utilizator)
-Password: text (parola utilizator)
-CreatedAt: date (data crearii)


Macheta pentru interfata grafica: UI.PNG

Componente:
- Form pentru postari
- Buton pentru login
- Searchbar
- Buton pentru adaugare postare (anonim/logat)
