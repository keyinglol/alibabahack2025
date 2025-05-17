import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Globe from 'globe.gl';
import * as THREE from 'three';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})

export class GlobeComponent implements AfterViewInit {
  @ViewChild('globeContainer', { static: true }) globeContainer!: ElementRef;
  world: any;

  locations = [
    { name: 'Astoria', lat: 40.7644, lng: -73.9235, details: 'Astoria details...' },
    { name: 'Lower Manhattan', lat: 60.7075, lng: 30.0113, details: 'Lower Manhattan details...' },
    { name: 'Hell\'s Kitchen', lat: 0.7638, lng: -73.9918, details: 'Hell\'s Kitchen details...' }
  ];

      //   //       .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      //         .showAtmosphere(true)
      // .atmosphereColor('lightskyblue')
      // .atmosphereAltitude(0.25)


  ngAfterViewInit(): void {
    this.world = new Globe(this.globeContainer.nativeElement)
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://www.solarsystemscope.com/textures/download/8k_earth_normal_map.jpg')
      .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
      .showAtmosphere(true)
      .atmosphereColor('#a0d8ef')  
      .atmosphereAltitude(0.35)    
      .pointsData(this.locations)
      .pointLat('lat')
      .pointLng('lng')
      .pointAltitude(0.07)
      .pointRadius(1.0)
      .pointColor(() => 'white')
      .pointLabel((d: any) => `
        <div class="point-label">
          <div class="details">
            <b>${d.name}</b><br>
            ${d.details}
          </div>
        </div>
      `)
      .customThreeObject(() => {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.1, 0.12, 32),
          new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5
          })
        );
        ring.rotation.x = -Math.PI / 2;
        return ring;
      });

    this.world.controls().autoRotate = true;
    this.world.controls().autoRotateSpeed = 0.5;
  }

  focusOnLocation(name: string): void {
    const location = this.locations.find(l => l.name === name);
    if (location) {
      this.world.pointOfView({ lat: location.lat, lng: location.lng, altitude: 1.5 }, 1500);
    }
  }
}
