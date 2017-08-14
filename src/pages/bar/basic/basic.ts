import { Component, ViewChild } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

// import { Ng2Echarts } from 'ng2-echarts';

// @IonicPage()
@Component({
  selector: 'page-bar-basic',
  templateUrl: 'basic.html',
})
export class BarBasicPage {

  @ViewChild('barBasic') barBasic;

  barBasicChart: any;

  option: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    // this.barBasicChart = Ng2Echarts.init(this.barBasic.nativeElement);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarPage');
  }

  getOption(){
    
  }

  ngAfterViewInit() {
    this.option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    // this.barBasicChart.setOption(option);
  }

}
