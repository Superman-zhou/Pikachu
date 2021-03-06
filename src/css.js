const string = `
.skin {
  background: #ffd111;
  min-height: 100vh;
  position: relative;
}
.nose {
  border: 10px solid;
  border-color: #000 transparent;
  border-bottom: none;
  position: relative;
  left: 50%;
  top: 145px;
  width: 0;
  height: 0;
  margin-left: -10px;
}
.yuan {
  position: absolute;
  width: 20px;
  height: 10px;
  top: -20px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: #000;
}

.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  border: 3px solid #000;
  width: 25px;
  height: 25px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 10px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}

/* 嘴 */
.mouth {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 140px;
  margin-left: -75px;
}
.mouth .up .lips {
  border-bottom: 4px solid #000;
  width: 75px;
  height: 38px;
  position: absolute;
  top: 0;
  background: #ffd111;
  z-index: 3;
}
.mouth .up .lips.left {
  border-left: 2px solid #000;
  border-bottom-left-radius: 340px 180px;
  transform-origin: 100% 100%;
  transform: rotate(-30deg);
  left: 2px;
}
.mouth .up .lips.right {
  border-right: 2px solid #000;
  border-bottom-right-radius: 340px 180px;
  transform-origin: 0 100%;
  transform: rotate(30deg);
  right: 2px;
}

.mouth .down .lip {
  width: 120px;
  height: 130px;
  border: 3px solid #000;
  border-top: none;
  position: absolute;
  left: 50%;
  top: 38px;
  margin-left: -60px;
  border-bottom-left-radius: 500px 1000px;
  border-bottom-right-radius: 500px 1000px;
  background: #cc4143;
  overflow: hidden;
}

.mouth .down .lip .tongue {
  width: 120px;
  height: 130px;
  position: absolute;
  left: 50%;
  top: 20px;
  margin-left: -60px;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  background: #dd666a;
  overflow: hidden;
}

.face {
  width: 70px;
  height: 70px;
  position: absolute;
  left: 50%;
  margin-left: -35px;
  top: 210px;
  z-index: 3;
  border-radius: 50%;
  background: #de1c31;
  border: 3px solid black;
}
.face.left {
  transform: translateX(-125px);
}
.face.right {
  transform: translateX(125px);
}
`
    export default string
// 模块化