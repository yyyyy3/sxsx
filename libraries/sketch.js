let circles = []; // 儲存圓圈的陣列

function setup() {
  createCanvas(windowWidth, windowHeight); // 設置畫布大小為視窗大小
  background('#add8e6'); // 設置背景為淡藍色

  // 創建 100 個圓圈，隨機位置和顏色
  for (let i = 0; i < 100; i++) {
    circles.push({
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(20, 50), // 隨機大小
      color: color(random(255), random(255), random(255)), // 隨機顏色
    });
  }
}

function draw() {
  background('#add8e6'); // 每次重繪背景

  // 繪製每個圓圈
  for (let circle of circles) {
    // 計算滑鼠與圓圈的距離
    let d = dist(mouseX, mouseY, circle.x, circle.y);

    // 根據距離改變圓圈大小和顏色
    let newSize = map(d, 0, width / 2, 50, 10); // 距離越近，圓圈越大
    let newColor = color(
      map(d, 0, width / 2, 255, 100), // R
      map(d, 0, width / 2, 100, 255), // G
      map(d, 0, width / 2, 100, 255) // B
    );

    // 繪製圓圈
    fill(newColor);
    noStroke();
    ellipse(circle.x, circle.y, newSize);
  }



}