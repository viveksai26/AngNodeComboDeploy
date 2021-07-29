import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { AppConstants } from '../../../shared/constants/app-constants';
import { AutheticationService } from '../../../shared/services/authentication/authetication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;

  constructor(private authService: SocialAuthService, private AutheticationService: AutheticationService) {}

  ngOnInit(): void {}
  goToFD() {
    window.open('https://viveksai26.github.io/FD/', '_blank');
  }
  goToPhotoFrame() {
    window.open('https://viveksai26.github.io/photo-frame/dashboard', '_blank');
  }
  goToMemeGenerator() {
    window.open('https://viveksai26.github.io/meme-generator/', '_blank');
  }
  goToArcadeGame() {
    window.open('https://viveksai26.github.io/Arcade-Game/', '_blank');
  }
  goToNeighborhoodMaps() {
    window.open('https://viveksai26.github.io/NeighborhoodMaps/', '_blank');
  }
}
