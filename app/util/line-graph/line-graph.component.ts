import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  graph = {
    x: 400,
    y: 240,
    xName: 'Days',
    yName: 'Projects',
    strokeLength: 5,
    graphValues: [20, 20, 40, 5, 10, 70, 15, 73, 61, 52],
    xValues: ['8/11', '9/11', '10/11', '11/11', '12/11', '13/11', '14/11', '15/11', '16/11', '17/11']
  };

  graphOut = {
    xLine: [ 'path', '', 'none'],
    yLine: [ 'path', '', 'none'],
    xStrokes: [ 'path', '', 'none'],
    yStrokes: [ 'path', '', 'none'],
    line: [ 'path', '', '#ffffff44'],
    graphValues: [20, 20, 40, 5, 10, 70, 15, 73, 61, 52]
  };

  t = {
    maxValY: 0
  };

  graphOutText = [];

  constructor() { }

  ngOnInit() {
    this.generateGraph();
  }

  generateGraph() {
    this.drawLines();
    this.drawStrokes();
    this.drawLine();
    this.drawText();
    this.draw();
  }

  drawLines() {
    let maxValY = this.graph.graphValues[0];
    this.graph.graphValues.forEach((val) => maxValY > val ? null : maxValY = val);
    this.graphOut.graphValues.forEach((val, ind, arr) => {
      arr[ind] = ( val / (maxValY * 1.2)) * this.graph.y;
    });
    this.t.maxValY = maxValY;
    this.graphOut.yLine[1] = 'M0 0 L0 ' + this.graph.y;
    this.graphOut.xLine[1] = 'M0 ' + this.graph.y + ' L' + this.graph.x + ' ' + this.graph.y;
  }

  drawStrokes() {
    let strokes = 'M 0 ' + this.graph.y;
    this.graph.graphValues.forEach((val, ind) => {
      if (ind > 0) {
        const offset = (this.graph.x / (this.graph.graphValues.length)) * (ind);
        strokes = strokes + ' M ' + offset + ' ' + this.graph.y + ' L ' + offset + ' ' + (this.graph.y + this.graph.strokeLength);
      }
    });
    this.graphOut.xStrokes[1] = strokes;

    strokes = '';
    for (let i = 0; i < 5; i++) {
      const offset = (this.graph.y / 5) * i;
      strokes = strokes + ' M 0 ' + offset + ' L -' + this.graph.strokeLength + ' ' + offset;
    }
    this.graphOut.yStrokes[1] = strokes;
  }

  drawLine() {
    let strokes = '';
    let lastOffset = 2;
    this.graph.graphValues.forEach((val, ind) => {
      const offset = (this.graph.x / (this.graph.graphValues.length)) * (ind);
      strokes = strokes + 'L ' + (offset > 0 ? offset : 0) + ' ' + (this.graph.y - this.graphOut.graphValues[ind]);
      lastOffset = offset;
    });
    strokes = 'M ' + lastOffset + ' ' + this.graph.y + ' L 0 ' + this.graph.y + ' ' + strokes;
    this.graphOut.line[1] = strokes;
  }

  drawText() {
    for (let i = 0; i < 5; i++) {
      const offset = (this.graph.y / 5) * i;
      const val = this.t.maxValY - (this.t.maxValY / 5) * i;
      this.graphOutText.push(['-30', '' + offset, '' + Math.round(val)]);
    }

    this.graph.graphValues.forEach((val, i) => {
      const offset = (this.graph.x / (this.graph.graphValues.length)) * (i);
      this.graphOutText.push(['' + (offset - 10), '' + (this.graph.y + 20), '' + this.graph.xValues[i]]);
    });

    this.graphOutText.push(['0', '0', this.graph.yName]);
  }

  draw() {
    const obj = document.getElementById('crack');
    // tslint:disable-next-line:forin
    for (const path in this.graphOut) {
      const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      newPath.setAttributeNS(null, 'd', this.graphOut[path][1]);
      newPath.setAttributeNS(null, 'fill', this.graphOut[path][2]);
      newPath.setAttributeNS(null, 'stroke', '#fff');
      obj.appendChild(newPath);
    }
    for (const txt of this.graphOutText) {
      console.log('Ladidadida');
      const nTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      nTxt.setAttributeNS(null, 'x', txt[0]);
      nTxt.setAttributeNS(null, 'y', txt[1]);
      nTxt.setAttributeNS(null, 'fill', '#fff');
      nTxt.innerHTML = txt[2];
      obj.appendChild(nTxt);
    }

  }

}
