import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { TextField, FormControlLabel, Checkbox, Link, Button } from '@material-ui/core';
import { PDFDocument } from 'pdf-lib';
import SignaturePad from 'signature_pad';
import moment from "moment";

interface LocalProps {
    identite: string | undefined;
    dateNaissance: string | undefined;
    adresse: string | undefined;
    option1: boolean | undefined;
    option2: boolean | undefined;
    option3: boolean | undefined;
    option4: boolean | undefined;
    option5: boolean | undefined;
    lieu: string | undefined;
    dateAttestation: string | undefined;
    signature: any;
    setIdentiteState: (value: string) => void;
    setDateNaissanceState: (value: string) => void;
    setAdresseState: (value: string) => void;
    setOption1State: (value: boolean) => void;
    setOption2State: (value: boolean) => void;
    setOption3State: (value: boolean) => void;
    setOption4State: (value: boolean) => void;
    setOption5State: (value: boolean) => void;
    setLieuState: (value: string) => void;
    setSignatureState: (value: any) => void;
}

export const AttestationComponent: React.FC = () => {
    const [identiteState, setIdentiteState] = useState<string>();
    const [dateNaissanceState, setDateNaissanceState] = useState<string>();
    const [adresseState, setAdresseState] = useState<string>();
    const [option1State, setOption1State] = useState<boolean>(false);
    const [option2State, setOption2State] = useState<boolean>(false);
    const [option3State, setOption3State] = useState<boolean>(false);
    const [option4State, setOption4State] = useState<boolean>(false);
    const [option5State, setOption5State] = useState<boolean>(false);
    const [lieuState, setLieuState] = useState<string>();
    const [dateAttestationState] = useState<string>(moment().format("DD/MM/YYYY"));
    const [signatureState, setSignatureState] = useState<any>(undefined);

    useEffect(() => {
        const canvas = document.querySelector('canvas');
        setSignatureState(new SignaturePad(canvas as any));
    }, []);

    async function generatePdf() {
        const TEXT_SIZE = 10;
        const formattedBirthDay = dateNaissanceState  || "";
    
        const bytes = await fetch('template.pdf').then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(bytes);
    
        const page = pdfDoc.getPages()[0];
    
        page.drawText(identiteState || '', { x: 135, y: 622, size: TEXT_SIZE });
        page.drawText(formattedBirthDay, { x: 135, y: 593, size: TEXT_SIZE });
        page.drawText(adresseState || '', { x: 135, y: 559, size: TEXT_SIZE });
    
        if (option1State) {
            page.drawText('x', { x: 51, y: 425, size: 17 });
        }
        if (option2State) {
            page.drawText('x', { x: 51, y: 350, size: 17 });
        }
        if (option3State) {
            page.drawText('x', { x: 51, y: 305, size: 17 });
        }
        if (option4State) {
            page.drawText('x', { x: 51, y: 274, size: 17 });
        }
        if (option5State) {
            page.drawText('x', { x: 51, y: 229, size: 17 });
        }
    
        page.drawText(lieuState || "", { x: 375, y: 140, size: TEXT_SIZE });
        page.drawText(String(new Date().getDate()), {
            x: 478,
            y: 140,
            size: TEXT_SIZE
        });
        page.drawText(String(new Date().getMonth() + 1).padStart(2, '0'), {
            x: 502,
            y: 140,
            size: 10
        });
    
        const signature: string = signatureState.toDataURL();
        const signatureImg = await pdfDoc.embedPng(signature);
        const signatureDim = signatureImg.scale(1 / (signatureImg.width / 150));
    
        page.drawImage(signatureImg, {
            x: page.getWidth() - signatureDim.width - 50,
            y: 30,
            width: signatureDim.width,
            height: signatureDim.height
        });
    
        const pdfBytes = await pdfDoc.save();
    
        return new Blob([pdfBytes], { type: 'application/pdf' });
    }

    function downloadBlob(blob: Blob, fileName: string) {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
    
        link.href = url;
        link.download = fileName;
        link.click();
    }

    async function genererPDF() {
        const blob = await generatePdf();
      
        downloadBlob(blob, "attestation.pdf");
    }
        

    return (
        <>
            <Paper elevation={3} className="Paper">
                <h1>Attestation de déplacement dérogatoire</h1>
                <p>
                    En application de l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="Underligne">
                    <ListItem>
                        Remplissez le formulaire ci-dessous pour générer l'attestation
                    </ListItem>
                    <ListItem>
                        Depuis la fin de matinée du 18 Mars 2020, il semblerait que les versions dématérialisées comme celle-ci ne soit plus accéptées lors des controles.
                    </ListItem>
                    <ListItem>
                        Cette mesure semble survenir suite à d'autres sites comme celui-ci qui conservaient vos données personnelles.
                    </ListItem>
                    <ListItem>
                        Ce site n'a à AUCUN moment conservé vos données, utilisé des cookies ou des librairies tierces de statistiques ou de supervision du traffic.
                    </ListItem>
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                <ListItem>
                    Je soussigné(e)
                </ListItem> 
                <ListItem>
                    <TextField id="identite" label="Mme / M." value={identiteState} onChange={(value) => setIdentiteState(value.target.value)} />
                </ListItem>
                <ListItem>
                    <TextField id="dateNaissance" label="Né(e) le" value={dateNaissanceState} onChange={(value) => setDateNaissanceState(value.target.value)} />
                </ListItem>
                <ListItem>
                    <TextField id="adresse" label="Demeurant" value={adresseState} onChange={(value) => setAdresseState(value.target.value)} />
                </ListItem>
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                <ListItem>
                    Je certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option1State} onChange={(value) => setOption1State(!option1State)}  />
                    }
                    label="Déplacements entre le domicile et le lieu d'exercice de l'activit professionnelle, lorsqu'ils sont indispensables à l'exercice d'activités et ne pouvant pas être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option2State} onChange={(value) => setOption2State(!option2State)} />
                    }
                    label="Déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur gouvernement.fr)"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option3State} onChange={(value) => setOption3State(!option3State)} />
                    }
                    label="Déplacements pour motif de santé"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option4State} onChange={(value) => setOption4State(!option4State)} />
                    }
                    label="Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables ou la garde d'enfants"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option5State} onChange={(value) => setOption5State(!option5State)} />
                    }
                    label="Déplacements brefs, à proximité du domicile, liés à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie"
                />
                </ListItem>
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                    <ListItem>
                        <TextField id="lieu" label="Fait à" onChange={(value) => setLieuState(value.target.value)} value={lieuState}/>
                    </ListItem>
                    <ListItem>
                        <TextField id="date" label="Le" value={dateAttestationState} disabled/>
                    </ListItem> 
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                        <canvas className="Signature"></canvas>
                        <TextField id="signature" label="Signature" disabled/>
                </p>
            </Paper>
            <Button variant="contained" onClick={() => genererPDF()}>Générer !</Button>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                    <ListItem>
                        Site développé confiné à Nantes par <Link className="App-link" href="https://www.linkedin.com/in/florent-t%C3%A9taud-2b3a298a/"> Florent Tétaud</Link>
                    </ListItem>
                    <ListItem>
                        Aucune de vos données ne quitte votre navigateur, rien n'est utilisé ou conservé
                    </ListItem>
                    <ListItem>
                      <Link className="App-link" href="https://github.com/TheBeardedGaul/covid19sanspapier" >
                        Code open source disponible sur github
                      </Link>
                    </ListItem>
                </p>
            </Paper>
        </>
    );
}