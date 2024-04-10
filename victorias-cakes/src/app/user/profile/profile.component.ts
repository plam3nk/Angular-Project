import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(['bg', 'com'])]],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const { username, email } = this.userService.user!;

    this.profileDetails = {
      username,
      email,
    };

    this.form.setValue({ username, email });
  }

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfile(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email } = this.profileDetails;

    this.userService.updateProfile(username, email).subscribe(() => {
      this.onToggle();
    });
  }
}
