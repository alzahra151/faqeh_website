import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [TableModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  data: any
  ordderId:number= 0;

  constructor(private route: ActivatedRoute,private dashboardservice:DashboardService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ordderId = +params.get('id')!;
      console.log("User ID updated:", this.ordderId);
      this.getOrderById(this.ordderId)
    });
  }
  getOrderById(id:number) {
    this.dashboardservice.getFabricOrderById(id).subscribe({
      next: (res) => {
        this.data = res
        console.log(this.data)
      }, error: (error) => {
        // this.toaster.error(error.message)
        console.log(error)
      }
    })
  }
}
