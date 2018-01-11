export function generator(){
    var dizi:number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var sayı:number;
    for(var i=0;i<16;i++){
        sayı=Math.floor(Math.random()*4+1);
        if (i<4) {
          for (let q = 0; q <=4; q++) {
            if (sayı!=dizi[q] || q==i) {
              dizi[i]=sayı;
            }
            else{
              q=5;
              i--;
            }
          }
        }
        else if (i<6) {
          if (sayı!=dizi[0] && sayı!=dizi[1]) {
            for (let q = 4; q <6; q++) {
              if (sayı!=dizi[q] || q==i) {
                dizi[i]=sayı;
              }
              else{
                q=6;
                i--;
                continue;
              }
            }
          }
          else{
            i--;
            continue;
          }
        }
        else if (i<8) {
          if (sayı!=dizi[2] && sayı!=dizi[3]) {
            for (let q = 4; q <8; q++) {
              if (sayı!=dizi[q] || q==i) {
                dizi[i]=sayı;
              }
              else{
                q=8;
                i--;
                continue;
              }
            }
          }
          else{
            i--;
            continue;
          }
        }
        else if (i<10) {
          if(i%2==0){
            if (sayı!=dizi[0] && sayı!=dizi[4]) {
              for (let q = 8; q <12; q++) {
                if (sayı!=dizi[q] || q==i) {
                  dizi[i]=sayı;
                }
                else{
                  q=12;
                  i--;
                  continue;
                }
              }
            }
            else{
              i--;
              continue;
            }
          }
          else{

            if (sayı!=dizi[1] && sayı!=dizi[3]) {
              for (let q = 8; q <12; q++) {
                if (sayı!=dizi[q] || q==i) {
                  dizi[i]=sayı;
                }
                else{
                  q=12;
                  i--;
                  continue;
                }
              }
            }
            else{
              i--;
              continue;
            }
          }
        }
        else if (i<12) {
          if(i%2==0){
            if (sayı!=dizi[2] && sayı!=dizi[6]) {
              for (let q = 8; q <12; q++) {
                if (sayı!=dizi[q] || q==i) {
                  dizi[i]=sayı;
                }
                else{
                  q=12;
                  i--;
                  continue;
                }
              }
            }
            else{
              i--;
              continue;
            }
          }
          else{
            if (sayı!=dizi[3] && sayı!=dizi[7]) {
              for (let q = 8; q <12; q++) {
                if (sayı!=dizi[q] || q==i) {
                  dizi[i]=sayı;
                }
                else{
                  q=12;
                  i--;
                  continue;
                }
              }
            }
            else{
              i--;
              continue;
            }
          }
        }
        else if (i<14) {
          
          if(i%2==0){
            if (sayı!=dizi[0] && sayı!=dizi[4] && sayı!=dizi[8]) {
                  dizi[i]=sayı;
            }
            else{
              i--;
              continue;
            }
          }
          else{
            if (sayı!=dizi[1] && sayı!=dizi[5] && sayı!=dizi[9]) {
              dizi[i]=sayı;
            }
            else{
            i--;
            continue;
            }
          }
        }
        else if (i<16) {
          if(i%2==0){
            if (sayı!=dizi[2] && sayı!=dizi[6] && sayı!=dizi[10]) {
                  dizi[i]=sayı;
            }
            else{
              i--;
              continue;
            }
          }
          else{
            if (sayı!=dizi[3] && sayı!=dizi[7] && sayı!=dizi[11]) {
              dizi[i]=sayı;
            }
            else{
            i--;
            continue;
            }
          }
        }
    }
    return dizi;
}