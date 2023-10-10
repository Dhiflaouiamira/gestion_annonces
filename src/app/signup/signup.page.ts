import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm: FormGroup; // Define a FormGroup for your form
  formData: any = {}; // Define an object to store form data

  constructor(private formBuilder: FormBuilder,private router: Router) {
    // Initialize the signupForm with validation rules
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.signupForm.valid) {
      // Form is valid, you can access form values using this.signupForm.value
      console.log('Form submitted with values:', this.signupForm.value);

      // You can add further logic here, e.g., sending data to a server for registration
    } else {
      // Form is invalid, display error messages to the user if needed
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']); 
  }
}
