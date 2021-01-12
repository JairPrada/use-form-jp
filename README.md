# Custom Hook Formularios

Custom Hook para manipular el estado y almacenar los valores de un formulario en react

# ¿Como Empezar?

Lo primero que debes hacer es instalarlo con el gestor de modulos de node npm

```shell
$ npm install useform-jps
```

Como paso siguiente debemos realizar la importacion de nuestro custom Hook al componente donde deseamos utilizarlo de la siguiente manera.

```js
import { useForm } from "useform-jp";
```

# ¿Como usarlo?

Para usar este Hook debemos realizar una des-estructuracion del objeto importado y definirlo en una costante , donde el primer parametro sera un objeto que almacenara los valores de nuestros campos de texto y el segundo la funcion que se encargara de actualizarlos.

```js
const [formState, setFormState] = useState({
  valorInput1: "",
  valorInput2: "",
});
```

Para actualizar los valores de nuestros campos de texto debemos invocar el metodo **setFormState** cuando se ejecute el evento onChange y definir el valor de nuestro campo de texto de la siguiente manera.

```html
<input value="{formState.nombre}" onChange="{setFormState}" />
```
