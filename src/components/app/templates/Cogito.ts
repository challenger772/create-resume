import Base from './Base'
import { Colors, Font, StyleObject } from './Interfaces'
import Header from '@/resume/Header'
import Contact from '@/resume/Contact'
import Education from '@/resume/Education'

export default class Cogito extends Base {
	constructor() {
    const colors: Colors | object = {
      primary: '#053f5e',
      secondary: '#393e46',
      accent: '#6effbf'
    }
    const font: Font | object = {
			name: 'OpenSans',
			headingSize: 24
    }
    const styles: StyleObject | object = {
      header: {
        alignment: 'right'
      },
      footer: {
        alignment: 'center'
      },
      titleMargin: {
        margin: [0, 7, 0, 0]
      },
      subtitle: {},
      subtitleMargin: {
        margin: [0, 7, 0, 3]
      },
      listExtra: {
        alignment: 'left'
      },
      listExtraMargin: {
        margin: [0, 7, 0, 3]
      },
      bold: {
        bold: true
      },
      skillMargin: {
        margin: [0, 7, 0, 0]
      },
      listMargin: {
        margin: [10, 0]
      },
      soloListMargin: {
        margin: [10, 7, 10, 3]
      }
    }
    super('Cogito', 3, colors, font, styles)
	}

	protected renderHeader(header: Header): object {
    const address: any[] = this.createAddress(
      header.address,
      header.city,
      header.province,
      header.postalCode
    )
    const contactHeader: any[] = this.createContactHeader(header.contacts)

    return {
      columns: [
        {
					width: '50%',
          text: header.name,
          style: 'heading',
          fontSize: this.font.headingSize,
					color: this.colors.primary,
					alignment: 'left'
				},
				{
					width: '50%',
					stack: [...address, ...contactHeader],
					alignment: 'right'
				}
      ],
      style: 'header'
    }
  }

  protected createAddress(
    address: string,
    city: string,
    province: string,
    postalCode: string
  ): any[] {
    return [address, `${city} ${province} ${postalCode}`]
  }

  protected createContactHeader(contacts: Contact[]): any[] {
    const contactHeader: string[] = []
    contacts.forEach((contact: Contact) => {
      contactHeader.push(contact.value)
    })
    return contactHeader
  }

  protected createListTitleAndExtra(title: string, extra: string): object {
    return {
      text: [this.createListTitle(title), ' ', this.createListExtra(extra)],
      style: ['subtitle', 'subtitleMargin'],
    }
  }

  // protected createTitle(title: string): object {
  //   return {
  //     stack: [
  //       {
  //         canvas: [
  //           {
  //             type: 'line',
  //             x1: 0,
  //             x2: 100,
  //             y1: 10,
  //             y2: 10,
  //             lineWidth: 1,
  //             lineColor: this.colors.accent,
  //             lineCap: 'round'
  //           }
  //         ]
  //       },
  //       {
  //         text: title,
  //         style: ['title', 'titleMargin'],
  //         fontSize: this.font.titleSize,
  //         color: this.colors.primary,
  //         headlineLevel: 1
  //       }
  //     ],
  //     unbreakable: true
  //   }
  // }
}