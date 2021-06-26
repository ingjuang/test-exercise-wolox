import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SingUpService } from '../../shared/services/sing-up.service';
import { GeneralService } from '../../shared/services/general.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  paise$: any[] = [];
  provincia$: any[] = [];
  singUpForm!: FormGroup;


  
  constructor(
    private formBuilder: FormBuilder,
    private singUpService: SingUpService,
    private generalService: GeneralService
    ) { }
    
    ngOnInit(): void {
      this.paise$ = this.generalService.getPaises();
      console.log(this.paise$);
      this.singUpForm = this.formBuilder.group({
        name: new FormControl('', [Validators.maxLength(30), Validators.required]),
        last_name: new FormControl('', [Validators.maxLength(30), Validators.required]),
        country: new FormControl('', Validators.required),
        province: new FormControl('', Validators.required),
        mail: new FormControl('', [Validators.required, Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$")]),
        phone: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]+")]),
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required)
      },{
        validator: this.passwordMatchValidator("password", "password2"),
      });
    
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
    this.singUpService
      .SingUp(this.singUpForm.value)
      .then((res:any)=>{
        if(res){
          console.log("se creó el usuario");
          
        }else{
          console.log("Error al crear el usuario");
          
        }
      })
  }

}
