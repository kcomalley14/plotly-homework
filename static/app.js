function plot(data) {
    d3.json("../data/samples.json").then((sampledata) => {
        console.log(sampledata);

        var ids = sampledata.samples[0].otu_ids;
        console.log(ids);

        var sampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
        console.log(sampleValues);

        var label = sampledata.samples[0].otu_labels.slice(0,10);
        console.log(label);

        var topTen = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();
        console.log(topTen);

        // var topValues = (sampledata.otu_ids.slice(0,10)).reverse();
        // console.log(topValues);

        var otuId = topTen.map(id => "OTU " + id);
        console.log(`OTU IDs: ${otuId}`);

        console.log(`Sample Values: ${sampleValues}`)
        console.log(`Id Values: ${topTen}`)

        // trace variable
        var trace = {
            x: sampleValues,
            y: otuId,
            text: label,
            type: 'bar',
            orientation: 'h'
        };

        var data = [trace];
        
        var layout = {
            title: "Top 10 OTU",
        };

        Plotly.newPlot("bar", data, layout);


    }).catch(err => {
        console.log(err);
      });

}
plot();


// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("../data/samples.json").then((data)=> {
        console.log(data)

        // get the id data to the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        plot(data.names[0]);
        getInfo(data.names[0]);
    }).catch(err => {
        console.log(err);
      });
}

init();