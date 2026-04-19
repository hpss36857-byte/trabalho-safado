import { useState } from 'react'
import './App.css'

  const handleMouseEnter = () => {
  document.body.classList.add('card-hovered')
}
const handleMouseLeave = () => {
  document.body.classList.remove('card-hovered')
}
    <></>

export default function App() {
  const [secao, setSecao] = useState('atacantes')
  return (
  
    <>
      <main>
      
        <button id="atkBtn" onClick={() => setSecao('atacantes')}>Atacantes</button>
        <button id="defBtn" onClick={() => setSecao('defensores')}>Defensores</button>

       <div className="link"><a href="https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators?role=attacker">saiba mais...</a></div> 
         {/* aqui inicia a putaria  */}

       {secao === 'atacantes' && (
          <div className="atacantes">
          <div className="card">
        
                {/* Ace */}
            <div className="Ace"> <h1> Ace </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Amaru */}
          <div className="card">
            <div className="Amaru"> <h1> Amaru </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Ash */}
          <div className="card">
            <div className="Ash"><h1> Ash </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Blackbeard */}
          <div className="card">
            <div className="Blackbeard"><h1> Blackbeard </h1></div>
            <div className="habilidade"></div>
          </div>
                {/* Blitz */}
          <div className="card">
            <div className="Blitz"><h1> Blitz </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Brava */}
          <div className="card">
            <div className="Brava"><h1> Brava </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Buck */}
          <div className="card">
            <div className="Buck"><h1> Buck </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Capitao */}
          <div className="card">
            <div className="Capitao"><h1> Capitão </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Deimos */}
          <div className="card">
            <div className="Deimos"><h1> Deimos </h1></div>
            <div className="habilidade"></div>
          </div>
                {/* Dokkaebi */}
          <div className="card">
            <div className="Dokkaebi"><h1>Dokkaebi</h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Finka */}
          <div className="card">
            <div className="Finka"> <h1> Finka </h1> </div>
            <div className="habilidade"></div>
          </div>
      
                {/* Fuze */}
          <div className="card">
            <div className="Fuze"> <h1> Fuze </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Glaz */}
          <div className="card">
            <div className="Glaz"> <h1> Glaz </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Gridlock */}
          <div className="card">
            <div className="Gridlock"> <h1>Gridlock</h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Grim */}
          <div className="card">
            <div className="Grim"> <h1> Grim </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Hibana */}
          <div className="card">
            <div className="Hibana"> <h1> Hibana </h1> </div>
            <div className="habilidade"></div>
          </div>
                {/* Iana */}
          <div className="card">
            <div className="Iana"> <h1> Iana </h1> </div>
            <div className="habilidade"></div>
          </div>
              {/* IQ */}
        <div className="card">
          <div className="IQ"><h1>IQ</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Jackal */}
        <div className="card">
          <div className="Jackal"><h1>Jackal</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Kali */}
        <div className="card">
          <div className="Kali"><h1>Kali</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Lion */}
        <div className="card">
          <div className="Lion"><h1>Lion</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Maverick */}
        <div className="card">
          <div className="Maverick"><h1>Maverick</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Montagne */}
        <div className="card">
          <div className="Montagne"><h1>Montagne</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Nøkk */}
        <div className="card">
          <div className="Nokk"><h1>Nøkk</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Nomad */}
        <div className="card">
          <div className="Nomad"><h1>Nomad</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Osa */}
        <div className="card">
          <div className="Osa"><h1>Osa</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Ram */}
        <div className="card">
          <div className="Ram"><h1>Ram</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Solid Snake */}
        <div className="card">
          <div className="Solid"><h1>Solid Snake</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Sens */}
        <div className="card">
          <div className="Sens"><h1>Sens</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Sledge */}
        <div className="card">
          <div className="Sledge"><h1>Sledge</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Striker */}
        <div className="card">
          <div className="Striker"><h1>Striker</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Thatcher */}
        <div className="card">
          <div className="Thatcher"><h1>Thatcher</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Thermite */}
        <div className="card">
          <div className="Thermite"><h1>Thermite</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Twitch */}
        <div className="card">
          <div className="Twitch"><h1>Twitch</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Ying */}
       <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="Ying"><h1>Ying</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Zero */}
        <div className="card">
          <div className="Zero"><h1>Zero</h1></div>
          <div className="habilidade"></div>
        </div>

        {/* Zofia */}
        <div className="card">
          <div className="Zofia"><h1>Zofia</h1></div>
          <div className="habilidade"></div>
        </div>   
    </div>
 )}

          {/* DEFENSORES */}

    {secao === 'defensores' && (
        <div className="defensores">

          {/* segunda putaria */}


          {/* DEFENSORES */}

          {/* Alibi */}
          <div className="card">
            <div className="Alibi"><h1>Alibi</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Aruni */}
          <div className="card">
            <div className="Aruni"><h1>Aruni</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Azami */}
          <div className="card">
            <div className="Azami"><h1>Azami</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Bandit */}
          <div className="card">
            <div className="Bandit"><h1>Bandit</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Castle */}
          <div className="card">
            <div className="Castle"><h1>Castle</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Caveira */}
          <div className="card">
            <div className="Caveira"><h1>Caveira</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Clash */}
          <div className="card">
            <div className="Clash"><h1>Clash</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Doc */}
          <div className="card">
            <div className="Doc"><h1>Doc</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Echo */}
          <div className="card">
            <div className="Echo"><h1>Echo</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Ela */}
          <div className="card">
            <div className="Ela"><h1>Ela</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Fenrir */}
          <div className="card">
            <div className="Fenrir"><h1>Fenrir</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Frost */}
          <div className="card">
            <div className="Frost"><h1>Frost</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Goyo */}
          <div className="card">
            <div className="Goyo"><h1>Goyo</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Jäger */}
          <div className="card">
            <div className="Jager"><h1>Jäger</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Kaid */}
          <div className="card">
            <div className="Kaid"><h1>Kaid</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Kapkan */}
          <div className="card">
            <div className="Kapkan"><h1>Kapkan</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Lesion */}
          <div className="card">
            <div className="Lesion"><h1>Lesion</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Maestro */}
          <div className="card">
            <div className="Maestro"><h1>Maestro</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Melusi */}
          <div className="card">
            <div className="Melusi"><h1>Melusi</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Mira */}
          <div className="card">
            <div className="Mira"><h1>Mira</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Mozzie */}
          <div className="card">
            <div className="Mozzie"><h1>Mozzie</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Mute */}
          <div className="card">
            <div className="Mute"><h1>Mute</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Oryx */}
          <div className="card">
            <div className="Oryx"><h1>Oryx</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Pulse */}
          <div className="card">
            <div className="Pulse"><h1>Pulse</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Rook */}
          <div className="card">
            <div className="Rook"><h1>Rook</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Sentry */}
          <div className="card">
            <div className="Sentry"><h1>Sentry</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Smoke */}
          <div className="card">
            <div className="Smoke"><h1>Smoke</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Solis */}
          <div className="card">
            <div className="Solis"><h1>Solis</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Tachanka */}
          <div className="card">
            <div className="Tachanka"><h1>Tachanka</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Thorn */}
          <div className="card">
            <div className="Thorn"><h1>Thorn</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Thunderbird */}
          <div className="card">
            <div className="Thunderbird"><h1>Thunderbird</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Tubarão */}
          <div className="card">
            <div className="Tubarao"><h1>Tubarão</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Valkyrie */}
          <div className="card">
            <div className="Valkyrie"><h1>Valkyrie</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Vigil */}
          <div className="card">
            <div className="Vigil"><h1>Vigil</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Warden */}
          <div className="card">
            <div className="Warden"><h1>Warden</h1></div>
            <div className="habilidade"></div>
          </div>

          {/* Wamai */}
          <div className="card">
            <div className="Wamai"><h1>Wamai</h1></div>
            <div className="habilidade"></div>
          </div>
    </div>
)}
      </main>
    </>
  )
}


