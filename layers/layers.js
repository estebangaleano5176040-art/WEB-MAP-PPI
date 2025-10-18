var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SATELITE_1 = new ol.layer.Tile({
            'title': 'SATELITE',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_39_2 = new ol.format.GeoJSON();
var features_39_2 = format_39_2.readFeatures(json_39_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_2.addFeatures(features_39_2);
var lyr_39_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_2, 
                style: style_39_2,
                popuplayertitle: '39',
                interactive: true,
    title: '39<br />\
    <img src="styles/legend/39_2_0.png" /> <br />\
    <img src="styles/legend/39_2_1.png" /> <br />\
    <img src="styles/legend/39_2_2.png" /> <br />\
    <img src="styles/legend/39_2_3.png" /> <br />\
    <img src="styles/legend/39_2_4.png" /> <br />\
    <img src="styles/legend/39_2_5.png" /> <br />' });
var format_38_3 = new ol.format.GeoJSON();
var features_38_3 = format_38_3.readFeatures(json_38_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_3.addFeatures(features_38_3);
var lyr_38_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_3, 
                style: style_38_3,
                popuplayertitle: '38',
                interactive: true,
    title: '38<br />\
    <img src="styles/legend/38_3_0.png" /> <br />\
    <img src="styles/legend/38_3_1.png" /> <br />\
    <img src="styles/legend/38_3_2.png" /> <br />\
    <img src="styles/legend/38_3_3.png" /> <br />\
    <img src="styles/legend/38_3_4.png" /> <br />\
    <img src="styles/legend/38_3_5.png" /> <br />' });
var format_37_4 = new ol.format.GeoJSON();
var features_37_4 = format_37_4.readFeatures(json_37_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_4.addFeatures(features_37_4);
var lyr_37_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_4, 
                style: style_37_4,
                popuplayertitle: '37',
                interactive: true,
    title: '37<br />\
    <img src="styles/legend/37_4_0.png" /> <br />\
    <img src="styles/legend/37_4_1.png" /> <br />\
    <img src="styles/legend/37_4_2.png" /> <br />\
    <img src="styles/legend/37_4_3.png" /> <br />\
    <img src="styles/legend/37_4_4.png" /> <br />\
    <img src="styles/legend/37_4_5.png" /> <br />\
    <img src="styles/legend/37_4_6.png" /> <br />' });
var format_36_5 = new ol.format.GeoJSON();
var features_36_5 = format_36_5.readFeatures(json_36_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_36_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_36_5.addFeatures(features_36_5);
var lyr_36_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_36_5, 
                style: style_36_5,
                popuplayertitle: '36',
                interactive: true,
                title: '<img src="styles/legend/36_5.png" /> 36'
            });
var format_35BOSQUESDEYACAREY_6 = new ol.format.GeoJSON();
var features_35BOSQUESDEYACAREY_6 = format_35BOSQUESDEYACAREY_6.readFeatures(json_35BOSQUESDEYACAREY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35BOSQUESDEYACAREY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35BOSQUESDEYACAREY_6.addFeatures(features_35BOSQUESDEYACAREY_6);
var lyr_35BOSQUESDEYACAREY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35BOSQUESDEYACAREY_6, 
                style: style_35BOSQUESDEYACAREY_6,
                popuplayertitle: '35-BOSQUES DE YACAREY',
                interactive: true,
                title: '<img src="styles/legend/35BOSQUESDEYACAREY_6.png" /> 35-BOSQUES DE YACAREY'
            });
var format_34_7 = new ol.format.GeoJSON();
var features_34_7 = format_34_7.readFeatures(json_34_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_7.addFeatures(features_34_7);
var lyr_34_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_7, 
                style: style_34_7,
                popuplayertitle: '34',
                interactive: true,
                title: '<img src="styles/legend/34_7.png" /> 34'
            });
var format_32BISQUESDEITACURUBII_8 = new ol.format.GeoJSON();
var features_32BISQUESDEITACURUBII_8 = format_32BISQUESDEITACURUBII_8.readFeatures(json_32BISQUESDEITACURUBII_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_32BISQUESDEITACURUBII_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_32BISQUESDEITACURUBII_8.addFeatures(features_32BISQUESDEITACURUBII_8);
var lyr_32BISQUESDEITACURUBII_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_32BISQUESDEITACURUBII_8, 
                style: style_32BISQUESDEITACURUBII_8,
                popuplayertitle: '32 -BISQUES DE ITACURUBI I ',
                interactive: true,
                title: '<img src="styles/legend/32BISQUESDEITACURUBII_8.png" /> 32 -BISQUES DE ITACURUBI I '
            });
var format_33BOSQUESDEITACURUBIII_9 = new ol.format.GeoJSON();
var features_33BOSQUESDEITACURUBIII_9 = format_33BOSQUESDEITACURUBIII_9.readFeatures(json_33BOSQUESDEITACURUBIII_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33BOSQUESDEITACURUBIII_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33BOSQUESDEITACURUBIII_9.addFeatures(features_33BOSQUESDEITACURUBIII_9);
var lyr_33BOSQUESDEITACURUBIII_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33BOSQUESDEITACURUBIII_9, 
                style: style_33BOSQUESDEITACURUBIII_9,
                popuplayertitle: '33- BOSQUES DE ITACURUBI II',
                interactive: true,
                title: '<img src="styles/legend/33BOSQUESDEITACURUBIII_9.png" /> 33- BOSQUES DE ITACURUBI II'
            });
var format_31AIRESDEVILLAREAL_10 = new ol.format.GeoJSON();
var features_31AIRESDEVILLAREAL_10 = format_31AIRESDEVILLAREAL_10.readFeatures(json_31AIRESDEVILLAREAL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31AIRESDEVILLAREAL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31AIRESDEVILLAREAL_10.addFeatures(features_31AIRESDEVILLAREAL_10);
var lyr_31AIRESDEVILLAREAL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_31AIRESDEVILLAREAL_10, 
                style: style_31AIRESDEVILLAREAL_10,
                popuplayertitle: '31-AIRES DE VILLA REAL',
                interactive: true,
                title: '<img src="styles/legend/31AIRESDEVILLAREAL_10.png" /> 31-AIRES DE VILLA REAL'
            });
var format_30LAARBOLEDA_11 = new ol.format.GeoJSON();
var features_30LAARBOLEDA_11 = format_30LAARBOLEDA_11.readFeatures(json_30LAARBOLEDA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30LAARBOLEDA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30LAARBOLEDA_11.addFeatures(features_30LAARBOLEDA_11);
var lyr_30LAARBOLEDA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30LAARBOLEDA_11, 
                style: style_30LAARBOLEDA_11,
                popuplayertitle: '30 - LA ARBOLEDA',
                interactive: true,
                title: '<img src="styles/legend/30LAARBOLEDA_11.png" /> 30 - LA ARBOLEDA'
            });
var format_29ESPERANZAII_12 = new ol.format.GeoJSON();
var features_29ESPERANZAII_12 = format_29ESPERANZAII_12.readFeatures(json_29ESPERANZAII_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_29ESPERANZAII_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_29ESPERANZAII_12.addFeatures(features_29ESPERANZAII_12);
var lyr_29ESPERANZAII_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_29ESPERANZAII_12, 
                style: style_29ESPERANZAII_12,
                popuplayertitle: '29-ESPERANZA II',
                interactive: true,
                title: '<img src="styles/legend/29ESPERANZAII_12.png" /> 29-ESPERANZA II'
            });
var format_28ESPERANZAI_13 = new ol.format.GeoJSON();
var features_28ESPERANZAI_13 = format_28ESPERANZAI_13.readFeatures(json_28ESPERANZAI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28ESPERANZAI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28ESPERANZAI_13.addFeatures(features_28ESPERANZAI_13);
var lyr_28ESPERANZAI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28ESPERANZAI_13, 
                style: style_28ESPERANZAI_13,
                popuplayertitle: '28- ESPERANZA I',
                interactive: true,
                title: '<img src="styles/legend/28ESPERANZAI_13.png" /> 28- ESPERANZA I'
            });
var format_27NUEVOAMANECERII_14 = new ol.format.GeoJSON();
var features_27NUEVOAMANECERII_14 = format_27NUEVOAMANECERII_14.readFeatures(json_27NUEVOAMANECERII_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27NUEVOAMANECERII_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27NUEVOAMANECERII_14.addFeatures(features_27NUEVOAMANECERII_14);
var lyr_27NUEVOAMANECERII_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_27NUEVOAMANECERII_14, 
                style: style_27NUEVOAMANECERII_14,
                popuplayertitle: '27-NUEVO AMANECER II',
                interactive: true,
                title: '<img src="styles/legend/27NUEVOAMANECERII_14.png" /> 27-NUEVO AMANECER II'
            });
var format_26VILLAVERDE_15 = new ol.format.GeoJSON();
var features_26VILLAVERDE_15 = format_26VILLAVERDE_15.readFeatures(json_26VILLAVERDE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_26VILLAVERDE_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_26VILLAVERDE_15.addFeatures(features_26VILLAVERDE_15);
var lyr_26VILLAVERDE_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_26VILLAVERDE_15, 
                style: style_26VILLAVERDE_15,
                popuplayertitle: '26- VILLA VERDE',
                interactive: true,
                title: '<img src="styles/legend/26VILLAVERDE_15.png" /> 26- VILLA VERDE'
            });
var format_25ISLAVERDE_16 = new ol.format.GeoJSON();
var features_25ISLAVERDE_16 = format_25ISLAVERDE_16.readFeatures(json_25ISLAVERDE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25ISLAVERDE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25ISLAVERDE_16.addFeatures(features_25ISLAVERDE_16);
var lyr_25ISLAVERDE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25ISLAVERDE_16, 
                style: style_25ISLAVERDE_16,
                popuplayertitle: '25-ISLA VERDE',
                interactive: true,
                title: '<img src="styles/legend/25ISLAVERDE_16.png" /> 25-ISLA VERDE'
            });
var format_24ELPROGRESO_17 = new ol.format.GeoJSON();
var features_24ELPROGRESO_17 = format_24ELPROGRESO_17.readFeatures(json_24ELPROGRESO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24ELPROGRESO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24ELPROGRESO_17.addFeatures(features_24ELPROGRESO_17);
var lyr_24ELPROGRESO_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24ELPROGRESO_17, 
                style: style_24ELPROGRESO_17,
                popuplayertitle: '24-EL PROGRESO',
                interactive: true,
                title: '<img src="styles/legend/24ELPROGRESO_17.png" /> 24-EL PROGRESO'
            });
var format_23ECOBARRIOCERROVISTA_18 = new ol.format.GeoJSON();
var features_23ECOBARRIOCERROVISTA_18 = format_23ECOBARRIOCERROVISTA_18.readFeatures(json_23ECOBARRIOCERROVISTA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_23ECOBARRIOCERROVISTA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_23ECOBARRIOCERROVISTA_18.addFeatures(features_23ECOBARRIOCERROVISTA_18);
var lyr_23ECOBARRIOCERROVISTA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_23ECOBARRIOCERROVISTA_18, 
                style: style_23ECOBARRIOCERROVISTA_18,
                popuplayertitle: '23-ECOBARRIO CERRO VISTA',
                interactive: true,
                title: '<img src="styles/legend/23ECOBARRIOCERROVISTA_18.png" /> 23-ECOBARRIO CERRO VISTA'
            });
var format_22PANAMBI_19 = new ol.format.GeoJSON();
var features_22PANAMBI_19 = format_22PANAMBI_19.readFeatures(json_22PANAMBI_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22PANAMBI_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22PANAMBI_19.addFeatures(features_22PANAMBI_19);
var lyr_22PANAMBI_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22PANAMBI_19, 
                style: style_22PANAMBI_19,
                popuplayertitle: '22-PANAMBI',
                interactive: true,
                title: '<img src="styles/legend/22PANAMBI_19.png" /> 22-PANAMBI'
            });
var format_20NACIENTESDEYTU_20 = new ol.format.GeoJSON();
var features_20NACIENTESDEYTU_20 = format_20NACIENTESDEYTU_20.readFeatures(json_20NACIENTESDEYTU_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20NACIENTESDEYTU_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20NACIENTESDEYTU_20.addFeatures(features_20NACIENTESDEYTU_20);
var lyr_20NACIENTESDEYTU_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20NACIENTESDEYTU_20, 
                style: style_20NACIENTESDEYTU_20,
                popuplayertitle: '20-NACIENTES DE YTU',
                interactive: true,
                title: '<img src="styles/legend/20NACIENTESDEYTU_20.png" /> 20-NACIENTES DE YTU'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SATELITE_1.setVisible(true);lyr_39_2.setVisible(true);lyr_38_3.setVisible(true);lyr_37_4.setVisible(true);lyr_36_5.setVisible(true);lyr_35BOSQUESDEYACAREY_6.setVisible(true);lyr_34_7.setVisible(true);lyr_32BISQUESDEITACURUBII_8.setVisible(true);lyr_33BOSQUESDEITACURUBIII_9.setVisible(true);lyr_31AIRESDEVILLAREAL_10.setVisible(true);lyr_30LAARBOLEDA_11.setVisible(true);lyr_29ESPERANZAII_12.setVisible(true);lyr_28ESPERANZAI_13.setVisible(true);lyr_27NUEVOAMANECERII_14.setVisible(true);lyr_26VILLAVERDE_15.setVisible(true);lyr_25ISLAVERDE_16.setVisible(true);lyr_24ELPROGRESO_17.setVisible(true);lyr_23ECOBARRIOCERROVISTA_18.setVisible(true);lyr_22PANAMBI_19.setVisible(true);lyr_20NACIENTESDEYTU_20.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SATELITE_1,lyr_39_2,lyr_38_3,lyr_37_4,lyr_36_5,lyr_35BOSQUESDEYACAREY_6,lyr_34_7,lyr_32BISQUESDEITACURUBII_8,lyr_33BOSQUESDEITACURUBIII_9,lyr_31AIRESDEVILLAREAL_10,lyr_30LAARBOLEDA_11,lyr_29ESPERANZAII_12,lyr_28ESPERANZAI_13,lyr_27NUEVOAMANECERII_14,lyr_26VILLAVERDE_15,lyr_25ISLAVERDE_16,lyr_24ELPROGRESO_17,lyr_23ECOBARRIOCERROVISTA_18,lyr_22PANAMBI_19,lyr_20NACIENTESDEYTU_20];
lyr_39_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_38_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'DEF_LOTE': 'DEF_LOTE', 'Manz': 'Manz', 'Lote': 'Lote', 'Sup.': 'Sup.', 'Cuota': 'Cuota', 'Credito': 'Credito', 'field_7': 'field_7', 'Precio Cont.': 'Precio Cont.', 'Estado': 'Estado', });
lyr_37_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Cuota': 'Cuota', 'Total': 'Total', 'Estado': 'Estado', });
lyr_36_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_35BOSQUESDEYACAREY_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_34_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_32BISQUESDEITACURUBII_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_33BOSQUESDEITACURUBIII_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_31AIRESDEVILLAREAL_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_30LAARBOLEDA_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_29ESPERANZAII_12.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_28ESPERANZAI_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_27NUEVOAMANECERII_14.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_26VILLAVERDE_15.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_25ISLAVERDE_16.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_24ELPROGRESO_17.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_23ECOBARRIOCERROVISTA_18.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_22PANAMBI_19.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_20NACIENTESDEYTU_20.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_39_2.set('fieldImages', {'fid': '', 'ID': 'TextEdit', });
lyr_38_3.set('fieldImages', {'fid': '', 'ID': 'TextEdit', 'DEF_LOTE': '', 'Manz': '', 'Lote': '', 'Sup.': '', 'Cuota': '', 'Credito': '', 'field_7': '', 'Precio Cont.': '', 'Estado': '', });
lyr_37_4.set('fieldImages', {'fid': '', 'ID': 'TextEdit', 'Manzana': '', 'Lote': '', 'Superficie': '', 'Cuota': '', 'Total': '', 'Estado': '', });
lyr_36_5.set('fieldImages', {'fid': '', 'ID': '', });
lyr_35BOSQUESDEYACAREY_6.set('fieldImages', {'fid': '', 'ID': '', });
lyr_34_7.set('fieldImages', {'fid': '', 'ID': '', });
lyr_32BISQUESDEITACURUBII_8.set('fieldImages', {'fid': '', 'ID': '', });
lyr_33BOSQUESDEITACURUBIII_9.set('fieldImages', {'fid': '', 'ID': '', });
lyr_31AIRESDEVILLAREAL_10.set('fieldImages', {'fid': '', 'ID': '', });
lyr_30LAARBOLEDA_11.set('fieldImages', {'fid': '', 'ID': '', });
lyr_29ESPERANZAII_12.set('fieldImages', {'fid': '', 'ID': '', });
lyr_28ESPERANZAI_13.set('fieldImages', {'fid': '', 'ID': '', });
lyr_27NUEVOAMANECERII_14.set('fieldImages', {'fid': '', 'ID': '', });
lyr_26VILLAVERDE_15.set('fieldImages', {'fid': '', 'ID': '', });
lyr_25ISLAVERDE_16.set('fieldImages', {'fid': '', 'ID': '', });
lyr_24ELPROGRESO_17.set('fieldImages', {'fid': '', 'ID': '', });
lyr_23ECOBARRIOCERROVISTA_18.set('fieldImages', {'fid': '', 'ID': '', });
lyr_22PANAMBI_19.set('fieldImages', {'fid': '', 'ID': '', });
lyr_20NACIENTESDEYTU_20.set('fieldImages', {'fid': '', 'ID': '', });
lyr_39_2.set('fieldLabels', {'fid': 'no label', 'ID': 'hidden field', });
lyr_38_3.set('fieldLabels', {'fid': 'no label', 'ID': 'hidden field', 'DEF_LOTE': 'no label', 'Manz': 'header label - always visible', 'Lote': 'header label - always visible', 'Sup.': 'header label - always visible', 'Cuota': 'header label - always visible', 'Credito': 'header label - always visible', 'field_7': 'no label', 'Precio Cont.': 'header label - always visible', 'Estado': 'header label - always visible', });
lyr_37_4.set('fieldLabels', {'fid': 'no label', 'ID': 'hidden field', 'Manzana': 'no label', 'Lote': 'no label', 'Superficie': 'no label', 'Cuota': 'header label - always visible', 'Total': 'no label', 'Estado': 'header label - always visible', });
lyr_36_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_35BOSQUESDEYACAREY_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_34_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_32BISQUESDEITACURUBII_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_33BOSQUESDEITACURUBIII_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_31AIRESDEVILLAREAL_10.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_30LAARBOLEDA_11.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_29ESPERANZAII_12.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_28ESPERANZAI_13.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_27NUEVOAMANECERII_14.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_26VILLAVERDE_15.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_25ISLAVERDE_16.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_24ELPROGRESO_17.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_23ECOBARRIOCERROVISTA_18.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_22PANAMBI_19.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_20NACIENTESDEYTU_20.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', });
lyr_20NACIENTESDEYTU_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});