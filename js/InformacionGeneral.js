/* Información general

JavaScript es un lenguaje dinámico múltiparadigma con tipos y operadores, objetos estándar integrados y métodos. Su sintaxis se basa en los lenguajes Java y C — muchas estructuras de esos lenguajes también se aplican a JavaScript. JavaScript admite la programación orientada a objetos con prototipos de objetos, en lugar de clases (consulta más información sobre herencia prototípica y ES2015 clases. JavaScript también admite la programación funcional — debido a que son objetos, las funciones se pueden almacenar en variables y pasarse como cualquier otro objeto.

Comencemos observando los componentes básicos de cualquier lenguaje: los tipos. Los programas JavaScript manipulan valores, y todos esos valores pertenecen a un tipo. Los tipos de JavaScript son:

    Números
    Cadenas de texto (Strings)
    Booleanos
    Funciones
    Objetos
    Símbolos (nuevo en ES2015)

... oh, y undefined y null, que son ... ligeramente extraños. Y Array, que es un tipo de objeto especial. Y Fechas (Date) y Expresiones regulares (RegExp), que son objetos que obtienes de forma gratuita. Y para ser técnicamente precisos, las funciones son solo un tipo especial de objeto. Por lo tanto, el diagrama de tipos se parece más a este:

    Números
    Cadenas de texto (Strings)
    Booleanos
    Símbolos (nuevo en ES2015)
    Objetos
        Funciones
        Array
        Date
        RegExp
    null
    undefined

Y también hay algunos tipos Error integrados. Sin embargo, las cosas son mucho más fáciles si nos atenemos al primer diagrama, por lo que discutiremos los tipos enumerados allí por ahora. 

*/