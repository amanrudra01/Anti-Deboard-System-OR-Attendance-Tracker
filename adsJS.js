document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var currentDate = new Date();
    var first_date = new Date('2023-08-14');
    var last_date = new Date('2023-11-16');
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var time = [
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds()
    ];

    var TotaltimeDiff = last_date.getTime() - first_date.getTime();
    var TotaldaysDiff = Math.ceil(TotaltimeDiff / (1000 * 60 * 60 * 24));
    console.log(TotaldaysDiff);

    var timeDiff = currentDate.getTime() - first_date.getTime();
    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)-1);
    console.log(daysDiff);

    var g;
    var group1 = document.getElementById('Group1');
    var group2 = document.getElementById('Group2');
    if (group1.checked) {
        g = 1;
    }
    else if (group2.checked) {
    g = 2;
    }
    var s = document.getElementById('courcecode').value;
    var sub=s.toLowerCase();
    var per = document.getElementById('presentattendence').value;
    calculate(g,sub,per)

    if (currentDate < last_date){
        currentDate=last_date
    }


    function calculate(g,sub,per){
        var csh=[
            'group',
            [
                ['week1'//14aug
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253',0,0,'cse254','csa202','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday','arp207','ied001','cse247','cse245','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week2',//21aug
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253',0,0,'cse254','csa202','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday','arp207','ied001','cse247','cse245','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week3',//28aug
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253',0,0,'cse254','csa202','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday','arp207','ied001','cse247','cse245','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week4',//4sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week5',//11sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday','arp207','ied001','cse247','cse245','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week6',//18sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week7',//25sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,'ied001','cse247','arp207','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week8',//02oct
                    ['Monday',0,0,0,0,0,0,0,0,0],
                    ['Tuesday',0,0,0,0,0,0,0,0,0],
                    ['Wednesday',0,0,0,0,0,0,0,0,0],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week9',//09oct
                    ['Monday',0,0,0,0,0,0,0,0,0],
                    ['Tuesday',0,0,0,0,0,0,0,0,0],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday',0,'ied001','cse247','arp207','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week10',//16oct
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday',0,'ied001','cse247','arp207','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week11',//23oct
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,0,0,0,0,0,0,0,0]
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday',0,'ied001','cse247','arp207','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week12',//30oct
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday',0,'ied001','cse247','arp207','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week13',//06nov
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp242','csp242',0,0],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254','cse245','cse253'],
                    ['Wednesday','cse245','cse242','csp254','csp254',0,'cal201','cal201','csp243','csp243'],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday',0,'ied001','cse247','arp207','csp244','csp244','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week14', //13nov
                    ['Monday',0,0,0,0,0,0,0,0,0],
                    ['Tuesday',0,0,0,0,0,0,0,0,0],
                    ['Wednesday',0,0,0,0,0,0,0,0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,0,0,'ied001','ied001'],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                    ]
            ],
            [   
                ['week1',//14aug
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253',0,0,'cse254','csa202','cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday','arp207','ied001','cse247',0,'csp243','csp243','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week2',//21aug
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253',0,0,'cse254','csa202','cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday','arp207','ied001','cse247',0,'csp243','csp243','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week3',//28aug
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253',0,0,'cse254','csa202','cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday','arp207','ied001','cse247',0,'csp243','csp243','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week4',//04sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week5',//11sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday','arp207','ied001','cse247',0,'csp243','csp243','csa202',0,'cse254'],
                    ['Saturday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week6',//18sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week7',//25sep
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,'ied001','cse247','arp207','csp243','csp243','csa202',0,'cse254'],
                    ['Saturday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week8',//02oct
                    ['Monday',0,0,0,0,0,0,0,0,0],
                    ['Tuesday',0,0,0,0,0,0,0,0,0],
                    ['Wednesday',0,0,0,0,0,0,0,0,0],
                    ['Thursday',0,0,0,0,0,0,0,0,0],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week9',//09oct
                    ['Monday',0,0,0,0,0,0,0,0,0],
                    ['Tuesday',0,0,0,0,0,0,0,0,0],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday',0,'ied001','cse247','arp207','csp243','csp243','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week10',//16oct
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday',0,'ied001','cse247','arp207','csp243','csp243','csa202',0,'cse254'],
                    ['Saturday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week11',//23oct
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,0,0,0,0,0,0,0,0],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday',0,'ied001','cse247','arp207','csp243','csp243','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week12',//30oct
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday',0,'ied001','cse247','arp207','csp243','csp243','csa202',0,'cse254'],
                    ['Saturday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week13',//06nov
                    ['Monday','cse247','arp207','cse245',0,'arp207','csp254','csp254','csp244','csp244'],
                    ['Tuesday',0,'cse242','cse242','cse253','csa202',0,'cse254',0,'cse253'],
                    ['Wednesday','cse245','cse242','cal201','cal201',0,'ied001','ied001',0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday',0,'ied001','cse247','arp207','csp243','csp243','csa202',0,'cse254'],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ],
                ['week14', //13nov
                    ['Monday',0,0,0,0,0,0,0,0,0],
                    ['Tuesday',0,0,0,0,0,0,0,0,0],
                    ['Wednesday',0,0,0,0,0,0,0,0,0],
                    ['Thursday','csa202','cse247','cse245',0,0,'cse245',0,'csp242','csp242'],
                    ['Friday',0,0,0,0,0,0,0,0,0],
                    ['Saturday',0,0,0,0,0,0,0,0,0],
                    ['Sunday',0,0,0,0,0,0,0,0,0]
                ]
            ]
            ];
        
        

        a1=0; a2=0;
        var d=0;
        var all_classes=0;
        var previous_all_classes=0;
        for (var i = 0; i < 14; i++) {
            for (var j = 1; j < 8; j++) {
                d=d+1;
                for (var k = 1; k < 10; k++) {
                    if(csh[g][i][j][k]==sub){
                            all_classes=all_classes+1;
                    }
                    if(d==daysDiff){
                        a1=i;
                        a2=j;
                        previous_all_classes=all_classes;
                    }
                }
            }
        }



        function isGivenTimeOrEarlier(givenTime) {
            const currentTime = new Date();
            const [givenHours, givenMinutes, givenSeconds] = givenTime.split(':');
            const givenDate = new Date();
          
            givenDate.setHours(givenHours);
            givenDate.setMinutes(givenMinutes);
            givenDate.setSeconds(givenSeconds);
          
            return givenDate <= currentTime;
          }

        
        if (csh[g][a1][a2][0]=='Sunday'){

            if (isGivenTimeOrEarlier('16:40:00')){
                for (var l = 1; l < 10; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }

            }
            
            else if (isGivenTimeOrEarlier('15:50:00')){
                for (var l = 1; l < 9; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('14:55:00')){
                for (var l = 1; l < 8; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('14:00:00')){
                for (var l = 1; l < 7; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('13:05:00')){
                for (var l = 1; l < 6; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('12:10:00')){
                for (var l = 1; l < 5; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('11:15:00')){
                for (var l = 1; l < 4; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('10:20:00')){
                for (var l = 1; l < 3; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('09:25:00')){
                for (var l = 1; l < 2; l++){
                    if(csh[g][a1+1][1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
        }
        else{
            if (isGivenTimeOrEarlier('16:40:00')){
                for (var l = 1; l < 10; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('15:50:00')){
                for (var l = 1; l < 9; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('14:55:00')){
                for (var l = 1; l < 8; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('14:00:00')){
                for (var l = 1; l < 7; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('13:05:00')){
                for (var l = 1; l < 6; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('12:10:00')){
                for (var l = 1; l < 5; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('11:15:00')){
                for (var l = 1; l < 4; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('10:20:00')){
                for (var l = 1; l < 3; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
            else if (isGivenTimeOrEarlier('09:25:00')){
                for (var l = 1; l < 2; l++){
                    if(csh[g][a1][a2+1][l]==sub){
                        previous_all_classes+=1
                    }
                }
            }
        }

        REAL_all_classes=all_classes;
        REAL_previous_all_classes=previous_all_classes;
        not_marked=0;
        if(sub=='cse245'){
            all_classes-=1;
            previous_all_classes-=1;
            not_marked=1;
        }
        else if(sub=='cse242'){    
            all_classes-=3;
            previous_all_classes-=3;
            not_marked= 3;
            }
        else if(sub=='cse253'){    
            all_classes-=4;
            previous_all_classes-=4;
            not_marked= 4;
            }
        else if(sub=='csp244'){
            all_classes=all_classes-0;
            previous_all_classes=previous_all_classes-0;
            not_marked= 0;
            }
        else if(sub=='csp242'){
            all_classes+=3;
            previous_all_classes+=3;
            not_marked= 1;
            }
        else if(sub=='csp243'){
            all_classes-=0;
            previous_all_classes-=0;
            not_marked= 0;
        }
        else if(sub=='cal201'){
            all_classes-=2;
            previous_all_classes-=2;
            not_marked= 2;
        }
        else if(sub=='csa202'){
            all_classes-=2;
            previous_all_classes-=2;
            not_marked= 2;
        }
        else if(sub=='arp207'){
            all_classes-=0;
            previous_all_classes-=0;
            not_marked= 0;   
        }
        else if(sub=='cse254'){
            all_classes-=1;
            previous_all_classes-=1;
            not_marked= 1;
        }
        else if(sub=='cse247'){
            all_classes-=1;
            previous_all_classes-=1;
            not_marked= 1;
        }
        else if(sub=='csp254'){
            all_classes-=2;
            previous_all_classes-=2;
            not_marked= 2;
        }
        else if(sub=='ied001'){
            all_classes-=0;
            previous_all_classes-=0;
            not_marked= 0;
        }
        

        var ATTEND_previous_all_classes = previous_all_classes * per / 100;
        var TOTAL_NEED_all_classes = all_classes * 75 / 100;
        var NOW_NEED_all_classes = TOTAL_NEED_all_classes - Math.round(ATTEND_previous_all_classes);
        var FUTURE_all_classes = all_classes - previous_all_classes;
        var NOW_ATTEND_classes = FUTURE_all_classes - Math.ceil(NOW_NEED_all_classes);
        var bunk = FUTURE_all_classes - Math.ceil(NOW_NEED_all_classes);

        // all_classes = total num of classes that are going to cunduct
        // TOTAL_NEED_all_classes = total num of classes that need for 75%+ attendence in whole sem
        // previous_all_classes = classes that are conducted till today
        // ATTEND_previous_all_classes = total attended classes till today
        // NOW_NEED_all_classes = from now on num of classes that is need for 75% till the end of sem
        // FUTURE_all_classes = classes before end of sem
        // NOW_ATTEND_classes = this is for check that if there is sufficient classes or not 
        // bunk = num of class that can be skipped
        

        if(sub=='cse253'){
            sub_table='CSE253 (Java)';
        }
        else if(sub=='csp243'){
            sub_table='CSP243 (Java Lab)';
        }
        else if(sub=='cse242'){
            sub_table='CSE242 (Data Structures)';
        }
        else if(sub=='csp242'){
            sub_table='CSP242 (Data Structures Lab)';
        }
        else if(sub=='csa202'){
            sub_table='CSA202 (Concept of Machine Learning))';
        }
        else if(sub=='cal201'){
            sub_table='CAL201 (Concept of Machine Learning Lab)';
        }
        else if(sub=='arp207'){
            sub_table='ARP207 (Logical Skills Building and Soft Skills)';
        }
        else if(sub=='cse245'){
            sub_table='CSE245 (Discrete Structures (Maths))';
        }
        else if(sub=='cse247'){
            sub_table='CSE247 (Computer Organization and Architecture)';
        }
        else if(sub=='cse254'){
            sub_table='CSE254 (Principles of Operating System)';
        }
        else if(sub=='csp244'){
            sub_table='CSP244 (Principles of Operating System Lab)';
        }
        else if(sub=='csp254'){
            sub_table='CSP254 (Project Based Learning (PBL)-1)';
        }
        else if(sub=='ied001'){
            sub_table='IED001 (Introduction of Entrepreneurship)';
        }
        



        var resultContainer = document.getElementById('resultContainer');
        var resultContainer2 = document.getElementById('resultContainer2');
        // var SUB = document.getElementById('SUB');
        // SUB.innerHTML = sub;
        

        if(NOW_NEED_all_classes<0){
            NOW_NEED_all_classes=0;
            bunk=FUTURE_all_classes;
        }


        resultContainer.innerHTML ="Total classes of this cource are:" + all_classes +"<br>Total number of classes that are conducted in 3rd sem are: "+ previous_all_classes + "<br>Total Number of classes you have attended till now is:"+ Math.round(ATTEND_previous_all_classes) + "<br>There will be " + FUTURE_all_classes + " more classes until the end of the semester." + "<br>You need to attend " + Math.ceil(NOW_NEED_all_classes) + " more classes of " + sub_table + "  to meet the attendance requirement of 75%" + "<br>Attendence of " + not_marked + " classes never been marked on iCloud";


        // if (NOW_ATTEND_classes < 0) {
        //     resultContainer.innerHTML += "<br>It would be better if you got a medical since your attendance is short by " + Math.abs(NOW_ATTEND_classes) + " classes.";
        // } else if (NOW_ATTEND_classes == 0) {
        //     resultContainer.innerHTML += "<br>Your attendance is currently on track, but you have to attend all classes of this course";
        // } else {
        //     resultContainer.innerHTML += "<br>" + bunk + " classes can be skipped if every thing went good with icloud, but no more than that.";
        // }
        // resultContainer.innerHTML += "Total classes of this Course according to iCloud: " + all_classes + "<br>You have to attend minimum " + Math.ceil(TOTAL_NEED_all_classes) + " classes of this cource in this sem." + "<br>Total conducted classes till today: " + previous_all_classes + "<br>Total attended classes till today: " + Math.round(ATTEND_previous_all_classes) + "<br>According to TimeTable and AcadmicCalander actually total classes of this course is: " + REAL_all_classes + "<br>Actually Total conducted classes till today is: " + REAL_previous_all_classes + "<br>Attendence of " + not_marked + " classes never been marked on iCloud";
        // if(bunk<0){
        //     bunk=0;
        // }



        var table=[
            { col1: sub_table,col2: "Total classes that are left", col3:FUTURE_all_classes},
            { col1: '➢', col2: "Classes you need to attend", col3: Math.ceil(NOW_NEED_all_classes) },
            { col1: '➢', col2: "Number of classes you can BUNK", col3: bunk}
        ];

        var resultTable = document.querySelector("#resultTable tbody");

        for (var i = 0; i < table.length; i++) {
            var row = document.createElement("tr");
            var rowData = table[i];
        
            // Loop through each property of the data object and create table cells
            for (var prop in rowData) {
                if (rowData.hasOwnProperty(prop)) {
                    var cell = document.createElement("td");
                    cell.textContent = rowData[prop];
                    row.appendChild(cell);
                }
            }
           

            resultTable.appendChild(row);

        }
        if (NOW_ATTEND_classes < 0) {
            resultContainer2.innerHTML += "<br>"+ sub_table +"➢ It would be better if you got a medical since your attendance in " + sub_table +" is short by " + Math.abs(NOW_ATTEND_classes) + " classes.";
        } else if (NOW_ATTEND_classes == 0) {
            resultContainer2.innerHTML += "<br>"+ sub_table +"➢ Your attendance is currently on track, but you have to attend all classes of "+ sub_table +" course";
        } else {
            resultContainer2.innerHTML += "<br>"+ sub_table +"➢ " + bunk + " classes can be skipped of "+ sub_table +", if every thing went good with icloud, but no more than that.";
        }
    }
    });