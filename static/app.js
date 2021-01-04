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
            width: 600,
            height: 800
        };

        Plotly.newPlot("bar", data, layout);

        // bubble chart
        var traceB = {
            x: sampledata.samples[0].otu_ids,
            y: sampledata.samples[0].sample_values,
            mode: "markers",
            marker: {
                size: sampledata.samples[0].sample_values,
                color: sampledata.samples[0].otu_ids
            },
            text: sampledata.samples[0].otu_labels
        }

        var dataB = [traceB];

        var layoutB = {
            xaxis: {title: "OTU ID"},
            width: 1000,
            height: 400
        }

        Plotly.newPlot("bubble", dataB, layoutB)

    }).catch(err => {
        console.log(err);
      });

}
plot();

function getData(id) {
    d3.json("../data/samples.json").then(data => {
        var metaData = data.metadata;
        console.log(metaData);

        var result = metaData.filter(results => results.id.toString() === id)[0];
        
        var demographic = d3.select("#sample-metadata");
        console.log(demographic);
        demographic.html("");

        Object.entries(result).forEach((info) => {
            demographic.append("h5").text(info[0].toUpperCase() + ": " + info[1] + "\n");

        });
    }).catch(err => {
        console.log(err);
      });
};

// Function for change of ID
function optionChanged(id) {
    getData(id);
    
    plot(id);
    
};
optionChanged();

// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("../data/samples.json").then((data) => {
        // console.log(data);

        // get the id data to the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        plot(data.names[0]);
        getData(data.names[0]);
    }).catch(err => {
        console.log(err);
      });
}

init();