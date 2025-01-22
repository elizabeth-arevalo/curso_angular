### **Conceptos Básicos de Angular**

Angular es un framework de desarrollo web basado en TypeScript, utilizado para crear aplicaciones web de una sola página (SPA). A continuación, se resumen los conceptos clave y métodos más importantes.

---

### **1. Arquitectura de Angular**
Angular se basa en una arquitectura modular compuesta por los siguientes elementos principales:

- **Componentes:** Controlan la vista y lógica de la aplicación.
- **Módulos:** Agrupan componentes relacionados (Ej: `AppModule`).
- **Directivas:** Añaden comportamiento a los elementos HTML.
- **Servicios:** Proveen lógica reutilizable para toda la aplicación.
- **Inyección de dependencias:** Patrón de diseño para gestionar instancias de clases.
- **Enrutamiento:** Permite la navegación entre vistas.
- **Pipes (Tuberías):** Transforman datos en plantillas.

---

### **2. Componentes**
Los componentes son la base de la UI en Angular.

**Estructura de un componente:**
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  mensaje: string = 'Hola Angular';

  cambiarMensaje() {
    this.mensaje = 'Mensaje cambiado';
  }
}
```

**Elementos clave:**
- `selector`: Nombre para llamar al componente en el HTML.
- `templateUrl`: Archivo de plantilla HTML.
- `styleUrls`: Archivos de estilos CSS.
- Métodos: Definen lógica de la aplicación.

**Métodos comunes en un componente:**
- `ngOnInit()`: Se ejecuta cuando se inicializa el componente.
- `ngOnDestroy()`: Se ejecuta al destruir el componente.

---

### **3. Módulos (NgModule)**
Los módulos organizan la aplicación en partes reutilizables.

**Ejemplo de módulo:**
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],  // Componentes
  imports: [BrowserModule],      // Módulos importados
  providers: [],                 // Servicios globales
  bootstrap: [AppComponent]       // Componente principal
})
export class AppModule {}
```

---

### **4. Directivas**
Las directivas modifican el comportamiento o la apariencia de elementos en el DOM.

**Tipos de directivas:**
1. **Estructurales:** Modifican la estructura del DOM.
   - `*ngIf`: Condicional.
   - `*ngFor`: Iteración.
   - `*ngSwitch`: Múltiples opciones.

   ```html
   <p *ngIf="mostrar">Este texto se muestra si la condición es verdadera</p>
   <ul>
     <li *ngFor="let item of lista">{{ item }}</li>
   </ul>
   ```

2. **Atributo:** Cambian la apariencia/estilo del elemento.
   - `ngClass`: Cambia clases dinámicamente.
   - `ngStyle`: Cambia estilos dinámicamente.

   ```html
   <p [ngClass]="{'text-danger': isError}">Mensaje</p>
   <p [ngStyle]="{'color': 'blue'}">Texto en azul</p>
   ```

3. **Personalizadas:** Se pueden crear directivas con lógica propia.

---

### **5. Servicios e Inyección de Dependencias**
Los servicios proporcionan lógica compartida entre componentes.

**Creación de un servicio:**
```bash
ng generate service ejemplo
```

**Ejemplo de servicio:**
```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {
  obtenerMensaje() {
    return 'Mensaje desde el servicio';
  }
}
```

**Uso en un componente:**
```ts
constructor(private ejemploService: EjemploService) {}

ngOnInit() {
  console.log(this.ejemploService.obtenerMensaje());
}
```

---

### **6. Enrutamiento (Router)**
Angular permite la navegación entre componentes mediante el router.

**Definición de rutas en `app-routing.module.ts`:**
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

**Uso en la plantilla:**
```html
<nav>
  <a routerLink="/">Inicio</a>
  <a routerLink="/about">Acerca de</a>
</nav>
<router-outlet></router-outlet>
```

---

### **7. Pipes (Tuberías)**
Transforman datos en la vista.

**Pipes comunes:**
- `date`: Formatea fechas.
- `uppercase` / `lowercase`: Cambia a mayúsculas/minúsculas.
- `currency`: Formatea números como moneda.

**Ejemplo de uso:**
```html
<p>{{ nombre | uppercase }}</p>
<p>{{ precio | currency:'USD' }}</p>
<p>{{ fecha | date:'dd/MM/yyyy' }}</p>
```

**Pipe personalizado:**
```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverso' })
export class ReversoPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

**Uso en plantilla:**
```html
<p>{{ 'Angular' | reverso }}</p>  <!-- Salida: ralugnA -->
```

---

### **8. Formularios en Angular**
Angular maneja dos tipos de formularios:

1. **Formularios Reactivos:**
   ```ts
   import { FormGroup, FormControl } from '@angular/forms';

   this.formulario = new FormGroup({
     nombre: new FormControl(''),
     email: new FormControl('')
   });

   enviar() {
     console.log(this.formulario.value);
   }
   ```

2. **Formularios Basados en Plantillas:**
   ```html
   <form #miFormulario="ngForm" (ngSubmit)="enviar(miFormulario)">
     <input type="text" name="nombre" ngModel required />
     <button type="submit">Enviar</button>
   </form>
   ```

---

### **9. Comunicación entre Componentes**
Formas de compartir datos entre componentes:

1. **`@Input()`** – Pasar datos desde el componente padre al hijo.
2. **`@Output()`** – Emitir eventos desde el hijo al padre.

**Ejemplo:**

```ts
export class HijoComponent {
  @Input() mensaje: string = '';
  @Output() respuesta = new EventEmitter<string>();

  enviarRespuesta() {
    this.respuesta.emit('Respuesta del hijo');
  }
}
```

---

### **10. Observables y RxJS**
Angular utiliza **RxJS** para manejar flujos de datos asíncronos.

**Ejemplo básico de Observable:**
```ts
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Dato 1');
  subscriber.next('Dato 2');
  subscriber.complete();
});

observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completado')
});
```

---

### **11. Lifecycle Hooks (Ciclo de Vida de Componentes)**
Angular ofrece varios métodos de ciclo de vida:

- `ngOnInit()`: Al iniciar el componente.
- `ngOnChanges()`: Cuando cambian las propiedades `@Input`.
- `ngOnDestroy()`: Antes de destruir el componente.

