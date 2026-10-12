import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeroNavbarComponent } from '../../components/main/main/hero-navbar/hero-navbar.component';
import { DashboardService } from '../../services/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-fabric-orders',
  standalone: true,
  imports: [HeroNavbarComponent,
    TableModule, 
    // CommonModule,
    // FormsModule,
    RouterLink
  ],
  templateUrl: './fabric-orders.component.html',
  styleUrl: './fabric-orders.component.scss'
})
export class FabricOrdersComponent {
  currentNavImage = ''
  data: any
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private dashboardService: DashboardService,
    private toaster:ToastrService
  ) { }
 ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // DOM-related logic here
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  this.getFabridOrders()
  }
  getFabridOrders() {
    this.dashboardService.getFabricOrders().subscribe({
      next: (res) => {
        this.data = res
        console.log(this.data)
      }, error: (error) => {
        this.toaster.error(error.message)
      }
    })
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // DOM-related logic here
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }
}
