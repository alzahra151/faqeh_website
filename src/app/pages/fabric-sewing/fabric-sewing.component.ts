import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { HeroNavbarComponent } from '../../components/main/main/hero-navbar/hero-navbar.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { filterData, fabrics, models, necks, sleeves, penModels } from './data-filter';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButton, ToggleButtonModule } from 'primeng/togglebutton';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { InputIcon, InputIconModule } from 'primeng/inputicon';
import { StepsModule } from 'primeng/steps';
import { FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from '../../services/dashboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fabric-sewing',
  standalone: true,
  imports: [HeroNavbarComponent, RadioButtonModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    IconFieldModule,
    InputIconModule,
    CommonModule,
    StepsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './fabric-sewing.component.html',
  styleUrl: './fabric-sewing.component.scss'
})
export class FabricSewingComponent {
  currentNavImage = ''
  ingredient!: string;
  filterData = filterData
  fabrics = fabrics
  // Selected Filters
  selectedSeason: string = '';
  selectedColor: string = '';
  selectedMaterial: string = '';
  selectedFabric: any
  selectedModel: string = ''
  selectedNeck: string = ''
  necks = necks
  sleeves = sleeves
  penModels = penModels
  // Filtered Fabrics
  filteredFabrics = [...this.fabrics];
  filterdModels = [...models]
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object,
    private dashboardService: DashboardService,
    private toastr: ToastrService) { }
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  userForm = this._formBuilder.group({
    name: ['', Validators.required],
    mobile: ['', [Validators.required]], // Adjust regex if needed
    address: ['', Validators.required]
  });
  neckForm = this._formBuilder.group({
    neckModel: new FormControl(null), // Stores selected neck type
    // selectedImage: new FormControl<any>(''),// Stor
    neckPadding: new FormControl(null),
    button: new FormControl(null),
  })
  supplementsForm = this._formBuilder.group({
    sleeve: new FormControl(null),
    penModel: new FormControl(null),
    gapzor: new FormControl(null),
    // selectedImage: new FormControl(null),
  })
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // DOM-related logic here
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    if (models?.length) {
      this.selectedModel = models[0].name; // Set default to the first model
      this.applyModelFillter()
    }
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // DOM-related logic here
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }
  // Apply Filters
  applyFabricFilters() {
    this.filteredFabrics = this.fabrics.filter(fabric => {
      const matchesSeason = this.selectedSeason ? fabric.season === this.selectedSeason : true;
      const matchesColor = this.selectedColor ? fabric.color === this.selectedColor : true;
      // const matchesMaterial = this.selectedMaterial ? fabric.material === this.selectedMaterial : true;

      return matchesSeason && matchesColor ;
    });
  }
  applyModelFillter() {
    this.filterdModels = models.filter(model => {
      const matchesSeason = this.selectedModel ? model.name === this.selectedModel : true;
      return matchesSeason
    });
  }
  // get total() {
  //   // return Number(this.selectedFabric?.price) + Number(this.neckForm.get('selectedImage')?.value?.price);
  // }
  addOrder() {
    const formattedData = {
      user_name: this.userForm.get('name')?.value ,
      user_mobile: this.userForm.get('mobile')?.value,
      user_address: this.userForm.get('address')?.value,
      fabric_season: this.selectedFabric?.season,
      fabric_color: this.selectedFabric?.color,
      fabric_image: this.selectedFabric?.image?.src,
      fabric_description: this.selectedFabric?.image?.describe,
      price: this.selectedFabric?.price ? parseInt(this.selectedFabric.price, 10) : null, // Ensure it's an integer
      model: this.selectedModel,
      neck_model: this.neckForm.get('neckModel')?.value,
      neck_padding: this.neckForm.get('neckPadding')?.value,
      buttons: this.neckForm.get('button')?.value,
      sleeves_padding: this.supplementsForm.get('sleeve')?.value,
      pen_model: this.supplementsForm.get('penModel')?.value,
      gapzor_padding: this.supplementsForm.get('gapzor')?.value
    };
    console.log(formattedData)
    // return formattedData
    this.dashboardService.post('/fabric-order/add', formattedData).subscribe({
      next: (res) => {
        this.userForm.reset()
        this.toastr.success('تمت الاضافة بنجاح');
      }, error: (error) => {
        console.log(error)
        this.toastr.error(error.message)
      }
    })
  }
}
