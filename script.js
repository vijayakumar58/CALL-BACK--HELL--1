var target=document.getElementById('foo')
target.innerHTML=""
document.body.append(target);
f1=()=>{
   setTimeout(()=>{
     console.log("10")
     f2=()=>{
      setTimeout(()=>{
        console.log("9")
        f3=()=>{
          setTimeout(()=>{
            console.log("8")
            f4=()=>{
              setTimeout(()=>{
                console.log("7")
                f5=()=>{
                  setTimeout(()=>{
                    console.log("6")
                    f6=()=>{
                      setTimeout(()=>{
                        console.log("5")
                        f7=()=>{
                          setTimeout(()=>{
                            console.log("4")
                            f8=()=>{
                              setTimeout(()=>{
                                console.log("3")
                                f9=()=>{
                                  setTimeout(()=>{
                                    console.log("2")
                                    f10=()=>{
                                      setTimeout(()=>{
                                        console.log("1")
                                        f11=()=>{
                                          setTimeout(()=>{
                                            console.log("HAPPY INDEPENDENCE DAY")
                                          },1000)
                                         }
                                         f11()
                                      },1000)
                                     }
                                     f10()
                                  },1000)
                                 }
                                 f9()
                              },1000)
                             }
                             f8()
                          },1000)
                         }
                         f7()
                      },1000)
                     }
                     f6()
                  },1000)
                 }
                 f5()
              },1000)
             }
             f4()
          },1000)
         }
         f3()
      },1000)
     }
     f2()
  },1000)
}
f1()
