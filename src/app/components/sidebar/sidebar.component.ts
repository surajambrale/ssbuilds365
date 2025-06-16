import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',    
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent  {
  @Input() isOpen: boolean = false;
  @Input() closeSidebar!: () => void;
}
