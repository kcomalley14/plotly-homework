function plot(data)
d3.json("../data/samples.json").then(sampledata => {
    console.log(sampledata);

    var ids = sampledata.samples[0].otu_ids;
    console.log(ids);
})