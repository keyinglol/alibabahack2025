import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Globe from 'globe.gl';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})
export class GlobeComponent implements AfterViewInit {
  @ViewChild('globeContainer', { static: true }) globeContainer!: ElementRef;

  ngAfterViewInit(): void {
   const world = new Globe(this.globeContainer.nativeElement)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .showAtmosphere(true)
    .atmosphereColor('lightskyblue')
    .atmosphereAltitude(0.25);


    // Enable auto-rotation
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.5;

    // Additional configurations like markers or arcs can be added here
  }
}

// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { NzModalService } from 'ng-zorro-antd/modal';
// import Globe from 'globe.gl';
// import {Store} from '../../../models/store.model';
// import {StoreService} from '../../../services/store.service';

// @Component({
//   selector: 'app-globe',
//   standalone: true,
//   imports: [],
//   templateUrl: './globe.component.html',
//   styleUrl: './globe.component.css'
// })
// export class GlobeComponent implements OnInit {

//   // @ViewChild('globeContainer', { static: true }) globeContainer!: ElementRef;
//   //
//   // stores: Store[] = [];
//   // globe: any;
//   // selectedStore: Store | null = null;
//   //
//   // constructor(
//   //   private storeService: StoreService,
//   //   private modalService: NzModalService
//   // ) {}
//   //
//   ngOnInit(): void {
//   //  this.loadStores();
//   }
//   //
//   // loadStores(): void {
//   //   this.storeService.getStores().subscribe(stores => {
//   //     this.stores = stores;
//   //     this.initGlobe();
//   //   });
//   // }
//   //
//   // initGlobe(): void {
//   //   // Initialize the globe - pass the element to the constructor
//   //   this.globe = new Globe(this.globeContainer.nativeElement)
//   //     .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
//   //     .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
//   //     .pointsData(this.stores)
//   //     .pointLat('lat')
//   //     .pointLng('lng')
//   //     .pointColor(() => 'red') // Red pins
//   //     .pointAltitude(0.1) // Slightly elevated pins
//   //     .pointRadius(0.5) // Size of pins
//   //     .pointsMerge(true)
//   //
//   //
//   //   // Set initial view angle
//   //   this.globe.pointOfView({ lat: 25, lng: 0, altitude: 2.5 });
//   // }
//   //
//   // showStoreDetails(store: Store): void {
//   //   this.selectedStore = store;
//   //
//   //   // Focus the globe on the selected store
//   //   this.globe.pointOfView({
//   //     lat: store.lat,
//   //     lng: store.lng,
//   //     altitude: 1.5
//   //   }, 1000); // 1000ms animation duration
//   // }
//   //
//   // closeDetails(): void {
//   //   this.selectedStore = null;
//   // }

//  }
