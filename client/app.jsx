
import '../imports/main.css';
App = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    return {
	      beers: Beers.find({}).fetch()
	    }
  	},

  	mapData: function() {  		
  		var data = [
  		    { qty: 0, xLabel: "Sun" },
  			{ qty: 0, xLabel: "Mon" },
  			{ qty: 0, xLabel: "Tue" },
  			{ qty: 0, xLabel: "Wed" },
  			{ qty: 0, xLabel: "Thu" },
  			{ qty: 0, xLabel: "Fri" },
  			{ qty: 0, xLabel: "Sat" }
  			
  		];
  		this.data.beers.map(function(d) {
	      data[moment(d.date).day()].qty += d.beers;
	    });
	    
	    return data;
  	},

	render: function() {		
		return (
		  <div>
		  
		  	<div className="page-header">
					<center>
						<h1>
						<i className="fa fa-glass"></i> Let's see howmuch you drink!
						</h1>
					</center>
			
			</div>

<div className="Maincontainer">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<BeerForm />
						<BeerList data={this.data.beers}/>
					</div>

					
				</div>
			</div> 
			<div className="col-md-offset-2 col-md-6">					
						<BarChart data={this.mapData()} width="700" height="400"/>
					</div>       
		  </div>
		  

<div className="footerContainer">
<footer id="myFooter">
        <div className="container1">
            <div className="row">
                <div className="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                    <li><a> This project was made </a></li>
                    <li><a> for fun as a way to track howmuch</a></li>
                    <li><a >alcohol students drink during the week</a></li>

                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>About me</h5>
                    <ul>
                        <li><a href="https://www.IamAkash.me">Personal Website</a></li>
                        <li><a href="https://www.github.com/akashmalhotra">Github</a></li>
                        <li><a href="https://www.instagram.com/akashm__/">Intagram</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:a7malhot@uwaterloo.ca?Subject=Hello">Email</a></li>
                        <li><a href="#">647-522-1853</a></li>
                        
                    </ul>
                </div>
            
                <iframe id="map-container" frameBorder="0" 
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_8ztAq32K4gRF44mljnynd0&key=AIzaSyD8TT0a_ixCg3fOLtxwnRFHjwb02TnfUco" >
            </iframe>
            </div>

            
        </div>
        <div className="social-networks">
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
        </div>
        <div className="footer-copyright">
            <p>© 2017 Copyright IamAkash </p>
        </div>
    </footer>
 </div>
 </div>
		);
	}
});