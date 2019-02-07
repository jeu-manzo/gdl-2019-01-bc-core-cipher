# Carta Secreta


Esta aplicación web es una alternativa para codificar textos y/o cartas con el método “Cifrado César”.  


Este método se convirtió en uno de los primero cifrados en hacerse popular.  Toma su nombre por el emperador Julio César quien lo usaba para proteger sus mensajes de contenido militar.


Es una de las técnicas más simples para encriptar ya que utiliza el método de sustitución, es decir, cada letra de un texto original es reemplazada por otra que se encuentra en un número fijo de posiciones (desplazamiento) más adelante del mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/1920px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad, se le puede dar una aplicación útil en un entorno informal.

Por lo anterior, esta aplicación web llega a solucionar el problema de privacidad que algunas personas pueden llegar a tener en su ambiente laboral, hogar, etc., en el cual se desea enviar o recibir textos y/o cartas de manera discreta, sin la preocupación de que lo llegue a leer una persona ajena.


## Detalles del proceso:

Al recibir la fórmula para encriptar el alfabeto en mayúsculas (x - 65 + n) % 26 + 65, la separé por partes para poder identificar cada valor:

* “x” es el número ASCII que se va a encriptar.
* “65” es la primera posición del alfabeto (“A” en ASCII).
* “n” es el desplazamiento que va a tomar la letra.
* “26” es el número de letras que tiene el alfabeto.

Teniendo estos datos, decidí desglosar el proceso general que tendría el encriptar un texto, y realicé los siguiente pasos:


1. Se recibe un texto


2. Convertir el Texto en código ASCII


3. Encriptar el código ASCII anterior con la fórmula


4. Convertir nuevamente a texto, el ASCII ya encriptado

### Desglose de cada paso:

Cada paso lo realicé dentro de una variable, y al final uní todo dentro de un “for”, para iterar letra por letra, esa iteración, dentro de otro “for”, para iterar palabra por palabra, y eso en conjunto dentro de una función, con dos parámetros, para tomar dos variables, una donde se alojaría el texto, y la otra el desplazamiento.

Para hacer la función de descifrar, realicé exactamente lo mismo, únicamente reemplazando las operaciones de suma y resta.

### Proceso de Diseño:

La decisión del diseño se implentó con la intensión de facilitarle la navegación al usuario, para que pueda tener claro la usabilidad, sin sentirse abrumado con elementos innecesarios. Se agregaron “tooltips” para resumir lo que es el cifrado césar y cómo poder emplearlo en caso de que el usuario no tenga conocimiento de esta técnica de encriptado.
