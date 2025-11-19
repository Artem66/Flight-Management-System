// src/app/shared/components/header/header.component.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  navItems = [
    { label: 'Plan', path: '/plan' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Log in', path: '/admin' }
  ];
}