// e example payload :New record created {"event":{},"app":{},"record":{"address":"","basket":{"Zen Cola-Vetro 200ml":2},"collectionId":"pbc_3527180448","collectionName":"orders","confirmed":false,"created":"2025-03-12 16:23:34.287Z","delivered":false,"desired_delivery":"2025-03-16 16:23:00.000Z","id":"5x7vmx961p6wmv1","name":"sdaf","notes":"","surname":"","type":"onsite","updated":"2025-03-12 16:23:34.287Z","updates":"","user":"ugaj154q2oerw91"},"context":{},"type":"create"}

onRecordAfterCreateSuccess((e) => {
    const sender = e.record.name + " " + e.record.surname
    const basket = JSON.stringify(e.record.basket)
    const message = new MailerMessage({
        to:      ['gionnimontana@gmail.com', 'gingergiobeverage@gmail.com'],
        subject: "Nuovo Ordine da " + sender,
        html: basket,
    })

    e.app.newMailClient().send(message)
}, "orders")