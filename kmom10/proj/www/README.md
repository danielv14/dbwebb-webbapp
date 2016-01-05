# IT_Jobb
Detta är en webbapp som med hjälp av ett bash-script och json-filer presenterar data från Arbetsförmedlingens API om IT jobb i Sverige

### Scriptet
I ```json/``` finns det ett script som heter ```update-sources.bash``` som med hjälp av curl sparar ned den data i json-format som applikationen behöver.

### Starta IT_Jobb
Att starta IT_Jobb är väldigt enkelt: starta med hjälp av ```index.html``` filen som finns i ```IT_Jobb/www```.

### Funktionalitet
Appen IT_Jobb fungerar som sådant att den ger använaren ett fågelperspektiv över IT-arbetsmarknaden i Sverige. IT_Jobb presenterar överskådlig information om alla yrkesgrupper inom IT och listar antal lediga jobb och platsannonser.   

Vidare låter IT_Jobb användaren se alla lediga IT_Jobb inom olika län i Sverige och antingen gå till Arbetsförmedlingens hemsida för respektive annons eller dela annonsen på Twitter.
