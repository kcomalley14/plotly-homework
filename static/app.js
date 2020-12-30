function plot(data) {
    d3.json("samples.json").then(sampledata => {
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

        
    });

}