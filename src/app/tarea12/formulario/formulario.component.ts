import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //Crear atributo de tipo FormBuilder
  constructor(private formBuilder : FormBuilder){ }

  // Estructura del formulario reactivo
  registroForm = this.formBuilder.group({
    nombre:['', Validators.required], 
    email: ['', {validators:[Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]}],
    telefono: ['', {validators:[Validators.required, Validators.pattern('[0-9]{9}')]}],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required],
    });

    // Generar un metodo get para cada campo del formularior reactivo
    get nombre(){ return this.registroForm.get('nombre'); }
    get email(){ return this.registroForm.get('email'); }
    get telefono(){ return this.registroForm.get('telefono'); }
    get asunto(){ return this.registroForm.get('asunto'); }
    get mensaje(){ return this.registroForm.get('mensaje'); }



    // Generar el metodo onSubmit para registrar los datos del formulario en un Array
    datos = new Array;

    gracias = false;

    onSubmit(){
      if(!this.registroForm.valid){
        alert('Alguna validación no se ha cumplido');
        return;
      }
      this.datos.push({
        'Nombre': this.registroForm.get('nombre')?.value,
        'Email': this.registroForm.get('email')?.value,
        'Telefono': this.registroForm.get('telefono')?.value,
        'Asunto': this.registroForm.get('asunto')?.value,
        'Mensaje': this.registroForm.get('mensaje')?.value,

      });
      console.log(this.datos);
      this.gracias = true;
    }
   
}
