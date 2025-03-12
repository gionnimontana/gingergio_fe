onRecordAfterCreateSuccess((e) => {
    console.log("New record created", e)
    // const isAnonymous = e.record.anonymous
    // const sender = isAnonymous ? "Anonymous" : e.record.email()
    // const message = new MailerMessage({
    //     from: {
    //         address: e.app.settings().meta.senderAddress,
    //         name:    e.app.settings().meta.senderName,
    //     },
    //     to:      ['gionnimontana@gmail.com', 'gingergiobeverage@gmail.com'],
    //     subject: "Nuovo Ordine da " + sender,
    //     html:    JSON.stringify(e.record),
    // })

    // e.app.newMailClient().send(message)
}, "orders")