function plot(data) {
    d3.json("../data/samples.json").then(sampledata => {
        console.log(sampledata);

        var ids = sampledata.samples[0].otu_ids;
        console.log(ids);

        var sampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
        console.log(sampleValues);

        var label = sampledata.samples[0].otu_labels.slice(0,10);
        console.log(label);

        var topTen = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();
        console.log(topTen);

        var topValues = (sampledata.otu_ids.slice(0,10)).reverse();
        console.log(topValues);

        var otuId = topValues.map(id => "OTU " + id);
        console.log(`OTU IDs: ${otuId}`);

        console.log(`Sample Values: ${sampleValues}`)
        console.log(`Id Values: ${idValues}`)

        // trace variable
        var trace = {
            x: sampleValues,
            y: otuId,
            text: labels,
            type: 'bar',
            orientation: 'h'
        };

        var data = [trace];
        
        var layout = {
            title: "Top 10 OTU",
        };

        Plotly.newPlot("bar", data, layout);
    });

}
