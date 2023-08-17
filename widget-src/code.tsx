// This widget will open an Iframe window with buttons to show a toast message and close the window.

const { widget } = figma
const { useEffect, useSyncedState, Text, AutoLayout, Input, SVG, Image, Rectangle } = widget

interface Theme {
  primary: string
  secondary: string
  background: string
  red: string
  orange: string
  green: string
  blue: string
  purple: string
}

const whiteTheme: Theme = {
  primary: '#333333',
  secondary: '#E6E6E6',
  background: '#FFFFFF',
  red: '#F9A491',
  orange: '#FCCC88',
  green: '#8DE2BE',
  blue: '#8CD0FD',
  purple: '#BDB0FF',
}



function Widget() : FigmaDeclarativeNode {
  
  
  const [theme, setTheme] = useSyncedState<Theme>('theme', whiteTheme)
  const [unit, setUnit] = useSyncedState<number>('unit', 4)
  
  const [photoUrl, setPhotoUrl] = useSyncedState<string | null>('photoUrl', null)
  useEffect(() => {
    if(!photoUrl){
      if(figma.currentUser) {
        setPhotoUrl(figma.currentUser.photoUrl)
      }
    }
  })

  const documentSrc = `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 5.667h-2.444a1.222 1.222 0 0 1-1.223-1.223V2" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${0.25*unit}px" vector-effect="non-scaling-stroke"/>
  <path clip-rule="evenodd" d="M4 14h8a2 2 0 0 0 2-2V5.495a2 2 0 0 0-.586-1.414L11.92 2.586A2 2 0 0 0 10.505 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${0.25*unit}px" vector-effect="non-scaling-stroke"/>
  <path d="M5.333 8h5.334M5.333 10.667h5.334M5.333 5.333h2" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${0.25*unit}px" vector-effect="non-scaling-stroke"/>
  </svg>`

  const timeSrc = `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.957 8.955a6 6 0 1 1-6.913-6.913M13.666 5.865c.132.353.23.718.292 1.09M12.67 4.13a5.96 5.96 0 0 0-.8-.8M10.135 2.334a5.935 5.935 0 0 0-1.09-.292" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${0.25*unit}px" vector-effect="non-scaling-stroke"/>
  <path d="M10.668 8.26H7.739V4.666" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${0.25*unit}px" vector-effect="non-scaling-stroke"/>
  </svg>`

  function Card(id=0) : FigmaDeclarativeNode {
    const [description, setDescription] = useSyncedState<string>(id+'description', 'Description')


    const designLinkBadgeSrc : FigmaDeclarativeNode = (
      <AutoLayout name={"design-link-badge-"+id} key={"design-link-badge-"+id}
        padding={{left: 2*unit, right: 2*unit, top: unit, bottom: unit}}
        spacing={unit}
        cornerRadius={unit}
        fill={theme.blue}
        width='fill-parent'
        minWidth={32*unit}
        hoverStyle={{opacity: 0.8}}
      >
        <SVG name="Design link" src={documentSrc}
        width={4*unit}
        height={4*unit}
        />
        <Text name={"design-link-text-"+id} key={"design-link-text-"+id}
          fontSize={3*unit}
          fontWeight={500}
          fill={theme.primary}
          width='fill-parent'
          height={4*unit}
          truncate={true}
        >
          Main page screen page or also
        </Text>
      </AutoLayout>
    )
    const dataBadgeSrc : FigmaDeclarativeNode = (
      <AutoLayout name={"date-badge-"+id} key={"date-badge-"+id}
        padding={{left: 2*unit, right: 2*unit, top: unit, bottom: unit}}
        spacing={unit}
        cornerRadius={unit}
        stroke={theme.secondary}
      >
        <SVG name="Date" src={timeSrc}
        width={4*unit}
        height={4*unit}
        />
        <Text name={"date-text-"+id} key={"date-text-"+id}
          fontSize={3*unit}
          fontWeight={500}
          fill={theme.primary}
        >
          Aug 17
        </Text>
      </AutoLayout>
    )
    const informationSrc : FigmaDeclarativeNode = (
      <AutoLayout name={"information-"+id} key={"information-"+id}
        verticalAlignItems="center"
        wrap={true}
        spacing={{horizontal: 8, vertical: 8}}
        width='fill-parent'
      >
        <SVG name="Document" src={documentSrc}
        width={4*unit}
        height={4*unit}
        />
        {dataBadgeSrc}
        {designLinkBadgeSrc}
      </AutoLayout>
    )
    const photoSrc : FigmaDeclarativeNode = (
        photoUrl ? (
          <Image cornerRadius={8*unit} width={8*unit} height={8*unit} src={photoUrl} />
        ) : (
          <Rectangle cornerRadius={8*unit} width={8*unit} height={8*unit} fill={theme.secondary} />
        )
      
    )

    const badgesSrc : FigmaDeclarativeNode = (
      <AutoLayout name={"badges-"+id} key={"badges-"+id}
        width='fill-parent'
        spacing={6*unit}
        verticalAlignItems="center"
      >
        {informationSrc}
        {photoSrc}
      </AutoLayout>
    )
    
    return (
      <AutoLayout name={"card-"+id} key={"card-"+id}
      direction="vertical"
      padding={4*unit}
      spacing={3*unit}
      width={75*unit}
      fill={theme.background}
      cornerRadius={unit}
      stroke={theme.secondary}
      >
        <Input name={"description-"+id} key={"description-"+id}
          value={description}
          fontSize={4*unit}
          fontWeight={500}
          fill={theme.primary}
          width='fill-parent'
          onTextEditEnd={e => setDescription(e.characters)}
        />
        {badgesSrc}
      </AutoLayout>
    )
  }
  return (
    Card()
  )
}



widget.register(Widget)
