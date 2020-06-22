<h1>Strona rezerwacji lotów - "Stork Airlines".</h1>

**Autorzy:** *Mirosław Bidziński, Ryszard Copa.*
**Grafika:** *Mirosław Bidziński.*

**Kierunek studiów:** *Programista Frontend z Angular*
**Rok adkademicki:** *2019/2020*

Git jest udostępniony jako publiczny: [Tutaj](https://github.com/ryszardcopa/PracaDyplomowWSB2.git)

------------------------------------------

<h3>Krótki opis:</h3>

  Strona oparta jest na Bootstrapie. Zastosowano preprocesory less/sass.
Zastosowano maksymalnie dwie strony, stronę główną index.html i stronę rezerwacji NewPassengger.html.

  Nawigacja odbywa się poprzez *"smooth scroolling"*, czyli przewijanie między sekcjami strony i menu hamburger w przypadku zmiany 
widoku na wertykalny.

Strona jest w pełni responsywna.

------------------------------------------

<h3>Opis działania:</h3>

1. ***Wyszukiwarka lotów*** - Po wyborze daty i miejsca docelowego pojawi się wynik wyszukiwania,
czyli propozycja lotu o ustalonej godzinie.

2. ***Logowanie do strony rezerwacji*** - Odbywa się poprzez okno logowania w menu, 
bądź jako wynik wyszukiwania z przyciskiem kierującym do powyższego okna.

Dane użytkowników i hasła przechowywane są w pliku ***users.json.***

------------------------------------------

<h3>ID użytkowników i hasła:</h3>

**ID 1:**

 - **Login:** ***ryszardcopa***
 - **Hasło:** ***password***

**ID 2:**

 - **Login:** ***miroslawbidzinski***
 - **Hasło:** ***password***

**ID 3:**

 - **Login:** ***marcindlubis***
 - **Hasło:** ***password***

------------------------------------------

  3. ***Strona rezerwacji:***

Maksymalna ilość pasażerów na którą można zarezerwować lot to sześć osób. 

**Dodatkowe parametry:**

  a) Bagaż dodatkowy o wadze: 25kg lub 32kg.
  
  b) Klasa lotu: ekonomiczna, biznesowa, pierwsza
  
  c) Wybór miejsca w samolocie

Każdy dodatkowy parametr np. Bagaż dodatkowy, zmiania cenę w oknie podsumowania.
W momencie usunięcia pasażera lub parametru - cena zmniejszy się automatycznie.

