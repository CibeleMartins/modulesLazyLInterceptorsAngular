import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { Chart, Colors, registerables } from 'chart.js';
import { CoinService } from 'src/app/services/CoinService.service';
import { Crypto, CryptoCoinService } from 'src/app/services/CryptoCoin.service';

@Component({
  selector: 'app-crypto-coins',
  templateUrl: './crypto-coins.component.html',
  styleUrls: ['./crypto-coins.component.scss']
})
export class CryptoCoinsComponent {

  flexDirectionColumn: boolean = false
  isLargeOrMedium: boolean = false
  isSmallorXsmall: boolean = false
  isLoading: boolean = false
  graphicCryptos!: void;

  constructor(private breakpointService: BreakpointObserver, private cryptoCoinService: CryptoCoinService) {
    Chart.register(...registerables, Colors);
    Chart.defaults.color = '#FFFF'

  }
  private thisAsThat(callBack: Function) {
    const self = this;
    return () => {
      return callBack.apply(self, [this].concat(Array.prototype.slice.call(arguments)));
    };
  }

  ngOnInit() {

    this.graphicCryptos = this.cryptoCoinService.getGraphicCrytos();

  }
}
