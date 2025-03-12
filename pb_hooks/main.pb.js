// e example payload :New record created {"event":{},"app":{},"record":{"address":"","basket":{"Zen Cola-Vetro 200ml":2},"collectionId":"pbc_3527180448","collectionName":"orders","confirmed":false,"created":"2025-03-12 16:23:34.287Z","delivered":false,"desired_delivery":"2025-03-16 16:23:00.000Z","id":"5x7vmx961p6wmv1","name":"sdaf","notes":"","surname":"","type":"onsite","updated":"2025-03-12 16:23:34.287Z","updates":"","user":"ugaj154q2oerw91"},"context":{},"type":"create"}

onRecordAfterCreateSuccess((e) => {
    try {
        const recordString = JSON.stringify(e.record)
        const recordParsed = JSON.parse(recordString)
        const sender = recordParsed.name + " " + recordParsed.surname
        const basket = JSON.stringify(recordParsed.basket)
        const message = new MailerMessage({
            from: {
                address: 'info@gingergio.it',
                name:    'GingerGio',
            },
            to:      [{address: 'gionnimontana@gmail.com'}, {address: 'gingergiobeverage@gmail.com'}],
            subject: "Nuovo Ordine da " + sender,
            html: basket,
        })

        e.app.newMailClient().send(message)
    } catch (error) {
        console.error(error)
    }
}, "orders")