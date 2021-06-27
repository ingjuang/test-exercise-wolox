import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SingUpService } from '../../shared/services/sing-up.service';
import { GeneralService } from '../../shared/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  paise$: any[] = [];
  provincia$: any[] = [];
  singUpForm!: FormGroup;
  selecPais: boolean = false;
  submit: boolean = false;
  AceptTermsAndCondicions: boolean = false;


  
  constructor(
    private formBuilder: FormBuilder,
    private singUpService: SingUpService,
    private generalService: GeneralService,
    private route: Router
    ) { }
    
    ngOnInit(): void {

      if(localStorage.getItem('usuario')){
        this.route.navigateByUrl('/list')
      }
      
      this.paise$ = this.generalService.getPaises();
      console.log(this.paise$);
      this.singUpForm = this.formBuilder.group({
        name: new FormControl('', [Validators.maxLength(30), Validators.required]),
        last_name: new FormControl('', [Validators.maxLength(30), Validators.required]),
        country: new FormControl('', Validators.required),
        province: new FormControl('', Validators.required),
        mail: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+"), Validators.maxLength(10)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^([a-zA-Z0-9]*)')]),
        password2: new FormControl('', Validators.required)
      },{
        validator: this.passwordMatchValidator("password", "password2"),
      });
    
  }

  loadProvincias(pais: any){
    
    if(pais !== "0"){
      this.selecPais = true;
    }else{
      this.selecPais = false;
    }
    this.provincia$ = this.generalService.getProvinciasByPais(pais);

    console.log(this.provincia$);
    
  }

  get f(){
    return this.singUpForm.controls;
  }

  hoverInSubmit(){
    this.submit = true
  }

  TermAndCondicions(){
    this.AceptTermsAndCondicions = true
  }

  passwordMatchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  
  onSubmit(){
    this.submit = true
    console.log(this.singUpForm);
    
    this.singUpService
      .SingUp(this.singUpForm.value)
      .then((res:any)=>{
        if(res){
          console.log("se creó el usuario");
          this.route.navigateByUrl('list')
        }else{
          console.log("Error al crear el usuario");
          
        }
      })
  }

}
