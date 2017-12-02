import '../imports/main.css';
BeerList = React.createClass({	

  	renderBeers() {		
		return this.props.data.map((beer) => {			
		  return <BeerItem beer={beer} />;
		});
	},

	render: function() {		
		return (
			<div className="panel panel-default">			  
			  <div className="panel-heading">
			    <h3 className="panel-title">Drinking History
			     ( click to remove )
			    </h3>			    
			  </div>
			  <div className="panel-body">
			    <ul>
			    	{this.renderBeers()}
			    </ul>
			  </div>
			</div>
		);
	}
})