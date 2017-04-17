window.onload = function () {
    var canvas = document.getElementById('canvas');
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext('2d');

    context.lineWidth = 5;
    context.strokeStyle = "#005588";

    for (var i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(50+i*100,60,40,0,2*Math.PI*(i+1)/10);
        context.closePath();
        context.stroke();
    }

    for (var i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(50+i*100,180,40,0,2*Math.PI*(i+1)/10);

        context.stroke();
    }

    context.fillStyle = "#005588";
    for (var i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(50+i*100,300,40,0,2*Math.PI*(i+1)/10,true);
        context.closePath();
        context.fill();
    }

    context.fillStyle = "#005588";
    for (var i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(50+i*100,420,40,0,2*Math.PI*(i+1)/10);

        context.fill();
    }
};

