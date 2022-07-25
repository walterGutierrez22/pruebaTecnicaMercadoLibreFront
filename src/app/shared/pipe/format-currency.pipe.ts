import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CurrencyType } from 'src/app/shared/enums/currency-type.enum';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  constructor(public decimalPipe: DecimalPipe) {}
  
  transform(value: any, locale?: string): any {
    const x =
      !value && !(typeof value == "number")
        ? ""
        : value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    if (x.replace("-", "").length > 7) {
      return this.getSymbol(locale) + x.replace(".", "’");
    } else {
      return this.getSymbol(locale) + x;
    }
  }

  getSymbol(locate: string | undefined){
    const currency = CurrencyType.CURRENCY_TYPE.find(element => element.locate === locate);
    if (currency) {
        return currency.symbol;
    }
    return "$ ";
  }

}