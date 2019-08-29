function Ticket(movie, time, age, name){
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.name = name;
  this.price = this.agePrice();
}

Ticket.prototype.agePrice = function() {
    if(parseInt(this.age) < 18) {
      return "$5";
    } else if(parseInt(this.age) >= 65) {
      return "$6";
    } else {
      return "$10";
    }
  }

  // var Chris = new Ticket ("Flub", "2pm", 38, "Chris")
  Ticket.prototype.showTicket = function(){
    return this.name + " " + "you owe" + this.price + " " + "to see" + this.movie;
  }

  function TicketBundle(ticket, ticketID){
    this.tickets = [];

  }

  TicketBundle.prototype.addTicket = function(ticket) {
  this.tickets.push(ticket);
}


// UI stuff
function showTicket(ticketId) {
  $(".ticketDetails").show();
  $(".yourMovie").html(ticketId.movie);
  $(".yourTime").html(ticketId.time);
  $(".yourAge").html(ticketId.age);
  $(".yourName").html(ticketId.name);
  $(".yourPrice").html(ticketId.price);
}



$(document).ready(function(){
  $(".ticketInfo").submit(function(event){
    event.preventDefault();
    var inputtedMovie = $("select[name=movieType] option:selected").val();
    var inputtedDate = $("select[name=movieTime] option:selected").val();
    var inputtedAge = $("#age").val();
    var inputtedName = $("#name").val();
    var newTicket = new Ticket (inputtedMovie, inputtedDate, inputtedAge, inputtedName);
    showTicket(newTicket);
    $(".ticketDetails").show();
    console.log(inputtedAge);
    console.log(newTicket);








  });
});
